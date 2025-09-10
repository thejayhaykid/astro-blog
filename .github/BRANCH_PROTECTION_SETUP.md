# Branch Protection Setup

To require linting to pass before merging PRs, set up branch protection rules:

## GitHub Web Interface Setup

1. Go to your repository on GitHub
2. Navigate to Settings → Branches
3. Click "Add rule" or edit the existing rule for `main`
4. Configure the following settings:

### Required Settings:
- ✅ **Require a pull request before merging**
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**

### Required Status Checks:
Add these status checks that must pass:
- `Lint & Type Check`
- `Build`

### Additional Recommended Settings:
- ✅ **Require review from code owners** (if you have CODEOWNERS file)
- ✅ **Dismiss stale reviews when new commits are pushed**
- ✅ **Restrict pushes that create files** (optional)
- ✅ **Require linear history** (optional, keeps git history clean)

## Automated Setup (Alternative)

You can also use GitHub CLI to set this up:

```bash
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["Lint & Type Check","Build"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1}' \
  --field restrictions=null
```

Replace `:owner` and `:repo` with your actual GitHub username and repository name.
