---
title: "Changing Content In React on Scroll"
pubDate: "Aug 28, 2023"
description: "A quick React tutorial"
heroImage: "/blog-images/tech/2020/03/kata-cover-image.jpg"
---

```tsx
import { useState, useEffect, useRef } from "react";
import { navigateToUrl } from "single-spa";
import { useSelector } from "react-redux";

import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Skeleton from "react-loading-skeleton";

import { useOutsideContextClick } from "@vidapay/reactcomponents";

import { DateToText, TextToCurrency } from "../utilities/textFormatter";
import ReceiptTag from "../components/receiptTag.component";
import RecentTransactsionsFilterMenu, {
  Section,
} from "../components/recentTransactionsFilterMenu.component";
import getRecentOrders from "../services/recentOrders.service";
import RecentTrasactionsSkeleton from "../components/recentTransactionsSkeleton.component";
import { RootState } from "../redux/store";
import {
  getCarrierStatus,
  mapCarrierStatus,
} from "../services/orderConfirmation.service";
import { CarrierInfo } from "../types";

// TODO: Extract to types folder
type RecentTransaction = {
  orderType: string;
  orderNumber: string;
  orderDate: string;
  dateOrdered: Date;
  status: string;
  orderTotal: number;
  esn?: string;
  phoneNumber?: string;
  pin?: string;
  imei?: string;
  sim?: string;
  createdBy: string;
};

function RecentTransactions() {
  const { configuration } = useSelector(
    (state: RootState) => state.manifest.activationOrderConfirmation
  );
  const { carrier } = useSelector((state: RootState) => state.manifest);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [uniqueDates, setUniqueDates] = useState<string[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<RecentTransaction | null>(null);
  const [headerDate, setHeaderDate] = useState<string>(uniqueDates[0] || "");
  const [uniqueUsers, setUniqueUsers] = useState<string[]>([]);
  const [allTransactions, setAllTransactions] = useState<RecentTransaction[]>(
    []
  );
  const [showingTransactions, setShowingTransactions] = useState<
    RecentTransaction[]
  >([]);
  const [selectedCarrierStatus, setSelectedCarrierStatus] =
    useState<CarrierInfo>();
  const [isLoadingCarrierStatus, setIsLoadingCarrierStatus] =
    useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);
  useOutsideContextClick(filterRef, () => setShowFilterMenu(false));
  const headerRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLElement[]>([]);

  // Filters
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [showOrderTypeFilter, setShowOrderTypeFilter] = useState<boolean>(true);
  const [showOrderStatusFilter, setShowOrderStatusFilter] =
    useState<boolean>(false);
  const [showUserFilter, setShowUserFilter] = useState<boolean>(false);

  const orderTypeSection: Section = {
    title: "Order Type",
    options: ["Activation", "Airtime", "Marketplace"],
    showSectionDetails: showOrderTypeFilter,
    toggleShowSectionDetails: () =>
      setShowOrderTypeFilter((prevState) => !prevState),
  };
  const orderStatusSection: Section = {
    title: "Order Status",
    options: ["Successful", "Failed", "Pending", "Voided"],
    showSectionDetails: showOrderStatusFilter,
    toggleShowSectionDetails: () =>
      setShowOrderStatusFilter((prevState) => !prevState),
  };
  const userSection: Section = {
    title: "User",
    options: uniqueUsers,
    showSectionDetails: showUserFilter,
    toggleShowSectionDetails: () =>
      setShowUserFilter((prevState) => !prevState),
  };
  const filterSections: Section[] = [
    orderTypeSection,
    orderStatusSection,
    userSection,
  ];

  // Remove dates that are no longer present with filter changes
  useEffect(() => {
    const datesMap = showingTransactions.map((transaction) =>
      DateToText(transaction.dateOrdered)
    );
    const datesSet = new Set(datesMap);
    const datesArray = Array.from(datesSet);
    const filteredDatesArray = datesArray.filter(
      (date) => date !== undefined || date !== ""
    ) as string[];
    setUniqueDates(filteredDatesArray);
  }, [showingTransactions]);

  // Fetch data on load
  useEffect(() => {
    getRecentOrders().then((transactions) => {
      setAllTransactions(transactions);
      setIsLoading(false);
    });
  }, []);

  // Reset header date when filters change or data received, scroll to top
  useEffect(() => {
    if (uniqueDates.length > 0) {
      setHeaderDate(uniqueDates[0]);
    } else {
      setHeaderDate("No Transactions");
    }
    const mainElement = document.getElementById("main") as HTMLElement;
    if (mainElement) {
      mainElement.scrollTo(0, 0);
    }
  }, [uniqueDates]);

  // Update date header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom;
      dateRef.current?.forEach((date, index) => {
        if (index <= uniqueDates.length - 1) {
          if (date && headerBottom) {
            if (date.getBoundingClientRect().bottom <= headerBottom) {
              setHeaderDate(uniqueDates[index + 1]);
            }
            if (
              headerDate === uniqueDates[index + 1] &&
              date.getBoundingClientRect().bottom > headerBottom
            ) {
              setHeaderDate(uniqueDates[index]);
            }
          }
        }
      });
    };

    const mainSection = document.getElementById("main") as HTMLElement;
    mainSection.addEventListener("scroll", handleScroll);

    return () => {
      mainSection.removeEventListener("scroll", handleScroll);
    };
  }, [headerDate, uniqueDates]);

  // Update other data when API data recieved
  useEffect(() => {
    const usersMap = allTransactions.map(
      (transaction) => transaction.createdBy
    );
    const usersSet = new Set(usersMap);
    const usersArray = Array.from(usersSet);
    setUniqueUsers(usersArray);
    setShowingTransactions(allTransactions);
    setFilterList([]);
  }, [allTransactions]);

  // Update transactions when filters change
  useEffect(() => {
    let filteredTransactions = allTransactions;
    const orderTypeFilter = filterList.filter((filter) =>
      filter.includes("Order Type.")
    );
    if (orderTypeFilter.length > 0) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        filterList.includes(`Order Type.${transaction.orderType}`)
      );
    }
    const orderStatusFilter = filterList.filter((filter) =>
      filter.includes("Order Status.")
    );
    if (orderStatusFilter.length > 0) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        filterList.includes(`Order Status.${transaction.status}`)
      );
    }
    const userFilter = filterList.filter((filter) => filter.includes("User."));
    if (userFilter.length > 0) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        filterList.includes(`User.${transaction.createdBy}`)
      );
    }
    setShowingTransactions(filteredTransactions);
  }, [allTransactions, filterList]);

  // Get carrier status if selected transaction changes
  useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    if (
      configuration.carrierStatusInfo &&
      selectedTransaction &&
      selectedTransaction.orderType === "Activation"
    ) {
      setIsLoadingCarrierStatus(true);
      // TODO: Move this to a utility function in textFormatter
      const carrierWithoutSpaces = carrier.replace(/\s/g, "").toLowerCase();
      getCarrierStatus(
        selectedTransaction.orderNumber || "",
        carrierWithoutSpaces
      ).then((carrierStatus) => {
        setSelectedCarrierStatus(carrierStatus);
        setIsLoadingCarrierStatus(false);
      });
    }
  }, [carrier, configuration.carrierStatusInfo, selectedTransaction]);

  // Go to order confirmation page when order details clicked
  const orderDetailsClick = () => {
    navigateToUrl(
      `/app/activation/order-confirmation?orderNumber=${selectedTransaction?.orderNumber}`
    );
  };

  // TODO: Implement download receipt
  const downloadCustomerReceiptClick = () => {
    navigateToUrl(`_blank`);
  };

  return (
    <div className="vp-full-height flex w-full">
      <main id="main" className="min-w-[65%] vp-full-height">
        <div
          ref={headerRef}
          className="mx-4 flex pt-4 pb-5 border-b border-primary sticky top-0 bg-primary align-baseline justify-between"
        >
          <h2 className="font-bold -mr-20">Recent Orders</h2>
          <p className="text-primary self-end -ml-24">
            {isLoading ? <Skeleton inline width={100} /> : headerDate}
          </p>
        </div>
        {uniqueDates.map((date, index) => (
          <div key={date}>
            {index > 0 && (
              <div
                ref={(el) => dateRef.current.push(el as HTMLElement)}
                className="flex justify-center mx-4 py-5 pr-8 border-b border-primary"
                key={date}
              >
                <p className="text-primary">{date}</p>
              </div>
            )}
            {showingTransactions
              .filter(
                (transaction) => DateToText(transaction.dateOrdered) === date
              )
              .map((transaction) => (
                <div
                  key={transaction.orderNumber}
                  className={`px-2 rounded mx-4 ${
                    selectedTransaction && selectedTransaction === transaction
                      ? "bg-lowlight"
                      : ""
                  }
                  `}
                >
                  <button
                    type="button"
                    key={transaction.orderNumber}
                    className="border-b border-primary pt-4 flex justify-between w-full"
                    onClick={() => setSelectedTransaction(transaction)}
                  >
                    <div>
                      <div className="flex gap-4">
                        <h4 className="font-bold">
                          {transaction.orderType} Order #
                          {transaction.orderNumber}
                        </h4>
                        <span className="text-highlight font-bold">
                          Amount: {TextToCurrency(transaction.orderTotal)}
                        </span>
                      </div>
                      <div className="flex justify-start mt-2">
                        <p className="text-hint text-sm">
                          {DateToText(transaction.dateOrdered, false, true)}
                          &nbsp;&middot;&nbsp;
                          {transaction.createdBy}
                        </p>
                      </div>
                      <div className="flex flex-col text-sm mt-2 pb-4">
                        {transaction.phoneNumber && (
                          <p className="flex justify-start gap-1">
                            Phone Number:&nbsp;{transaction.phoneNumber}
                          </p>
                        )}
                        <p className="flex justify-start gap-1">
                          {transaction.imei &&
                            `IMEI: 
                          ${transaction.imei} `}
                          {transaction.sim &&
                            `SIM: 
                          ${transaction.sim}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between self-center h-full mr-4">
                      <ReceiptTag orderStatus={transaction.status} />
                      <ChevronRightIcon className="h-6 w-6 flex-shrink-0 text-highlight ml-8" />
                    </div>
                  </button>
                </div>
              ))}
          </div>
        ))}
        {isLoading && <RecentTrasactionsSkeleton />}
      </main>
      <aside className="border-l border-primary bg-secondary overflow-visible p-4 w-full">
        {selectedTransaction ? (
          <div className="flex flex-col p-8">
            <div className="flex justify-between align-baseline">
              <h2 className="font-bold">
                {selectedTransaction.orderType} Order #
                {selectedTransaction.orderNumber}
              </h2>
              <ReceiptTag
                orderStatus={selectedTransaction.status}
                extraClasses="self-baseline"
              />
            </div>
            <p className="text-primary font-bold text-sm mt-2">
              Amount:&nbsp;{TextToCurrency(selectedTransaction.orderTotal)}
            </p>
            <div className="flex justify-start mt-2">
              <p className="text-hint text-sm">
                {DateToText(selectedTransaction.dateOrdered, false, true)}
                &nbsp;&middot;&nbsp;
                {selectedTransaction.createdBy}
              </p>
            </div>
            <div className="flex flex-col text-sm mt-6 pb-4">
              {selectedTransaction.phoneNumber && (
                <>
                  <p className="justify-start">Phone Number</p>
                  <strong className="justify-start mt-2">
                    {selectedTransaction.phoneNumber}
                  </strong>
                </>
              )}
            </div>
            <div className="flex gap-1 w-full jusify-around">
              <div className="flex flex-col gap-1 w-full jusify-around">
                <div className="flex flex-col text-sm mt-6 pb-4">
                  {configuration.carrierStatusInfo &&
                    selectedTransaction.orderType === "Activation" && (
                      <>
                        <p className="justify-start">Carrier Status</p>
                        <strong className="justify-start mt-2">
                          {isLoadingCarrierStatus ? (
                            <Skeleton width={100} />
                          ) : (
                            mapCarrierStatus(
                              selectedCarrierStatus?.status || "Unknown"
                            )
                          )}
                        </strong>
                      </>
                    )}
                </div>
                <div className="flex flex-col text-sm mt-6 pb-4">
                  {selectedTransaction.esn && (
                    <>
                      <p className="justify-start">IMEI</p>
                      <strong className="justify-start mt-2">
                        {selectedTransaction.imei}
                      </strong>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full jusify-around">
                <div className="flex flex-col text-sm mt-6 pb-4">
                  {configuration.carrierStatusInfo &&
                    selectedTransaction.orderType === "Activation" && (
                      <>
                        <p className="justify-start">Carrier Confirmation #</p>
                        <strong className="justify-start mt-2">
                          {isLoadingCarrierStatus ? (
                            <Skeleton width={100} />
                          ) : (
                            selectedCarrierStatus?.message ||
                            `Currently not available`
                          )}
                        </strong>
                      </>
                    )}
                </div>
                <div className="flex flex-col text-sm mt-6 pb-4">
                  {selectedTransaction.sim && (
                    <>
                      <p className="justify-start">SIM</p>
                      <strong className="justify-start mt-2">
                        {selectedTransaction.sim}
                      </strong>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="vp-btn-submit mt-8 flex-nowrap w-max"
              onClick={orderDetailsClick}
            >
              <span className="flex">
                View Order Details&nbsp;
                <ArrowRightIcon className="w-5 h-5 flex-shrink-0" />
              </span>
            </button>
            <button
              type="button"
              className="vp-btn-outline mt-8 flex-nowrap w-max"
              onClick={downloadCustomerReceiptClick}
            >
              <span className="flex">
                Download Customer Receipt&nbsp;
                <ArrowDownTrayIcon className="w-5 h-5 flex-shrink-0" />
              </span>
            </button>
            <a
              className="mt-12 text-failure flex text-sm underline font-bold pr-4"
              href="_blank"
            >
              Report an issue
              <ArrowRightIcon className="h-5 w-5 flex-shrink-0" />
            </a>
          </div>
        ) : (
          <h5 className="text-info">
            {isLoading ? (
              <Skeleton width={200} />
            ) : (
              "Select a transaction to view details"
            )}
          </h5>
        )}
      </aside>
    </div>
  );
}

export default RecentTransactions;
```
