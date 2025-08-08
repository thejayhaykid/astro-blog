import * as React from 'react';
import { ModelsEnum } from '../../types/Model.types';
import Football from './Football';

interface RenderModelProps {
    model: ModelsEnum;
}

const RenderModel: React.FC<RenderModelProps> = ({ model }) => {
    // if (model === ModelsEnum.football) {
    //     return <Football />;
    // }
    return null;
};

export default RenderModel;