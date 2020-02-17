import { IFlowModel } from './model';

/**
 * @export
 * @interface IFlowService
 */
export interface IFlowService {

    /**
     * @returns {Promise<IFlowModel[]>}
     * @memberof IFlowService
     */
    findAll(): Promise<IFlowModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IFlowModel>}
     * @memberof IFlowService
     */
    findOne(code: string): Promise<IFlowModel>;

    /**
     * @param {IFlowModel} IFlowModel
     * @returns {Promise<IFlowModel>}
     * @memberof IFlowService
     */
    insert(IFlowModel: IFlowModel): Promise<IFlowModel>;

    /**
     * @param {string} id
     * @returns {Promise<IFlowModel>}
     * @memberof IFlowService
     */
    remove(id: string): Promise<IFlowModel>;
}
