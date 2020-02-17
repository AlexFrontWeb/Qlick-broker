import { IParameterModel } from './model';

/**
 * @export
 * @interface IParameterService
 */
export interface IParameterService {

    /**
     * @returns {Promise<IParameterModel[]>}
     * @memberof IParameterService
     */
    findAll(): Promise<IParameterModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IParameterModel>}
     * @memberof IParameterService
     */
    findOne(code: string): Promise<IParameterModel>;

    /**
     * @param {IParameterModel} IParameterModel
     * @returns {Promise<IParameterModel>}
     * @memberof IParameterService
     */
    insert(IParameterModel: IParameterModel): Promise<IParameterModel>;

    /**
     * @param {string} id
     * @returns {Promise<IParameterModel>}
     * @memberof IParameterService
     */
    remove(id: string): Promise<IParameterModel>;
}
