import * as Joi from 'joi';
import ParameterModel, { IParameterModel } from './model';
import ParameterValidation from './validation';
import { IParameterService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IParameterModelService}
 */
const ParameterService: IParameterService = {
    /**
     * @returns {Promise < IParameterModel[] >}
     * @memberof ParameterService
     */
    async findAll(): Promise < IParameterModel[] > {
        try {
            return await ParameterModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IParameterModel >}
     * @memberof ParameterService
     */
    async findOne(id: string): Promise < IParameterModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ParameterValidation.getParameter({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ParameterModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IParameterModel} parameter
     * @returns {Promise < IParameterModel >}
     * @memberof ParameterService
     */
    async insert(body: IParameterModel): Promise < IParameterModel > {
        try {
            const validate: Joi.ValidationResult < IParameterModel > = ParameterValidation.createParameter(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const parameter: IParameterModel = await ParameterModel.create(body);

            return parameter;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IParameterModel >}
     * @memberof ParameterService
     */
    async remove(id: string): Promise < IParameterModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = ParameterValidation.removeParameter({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const parameter: IParameterModel = await ParameterModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return parameter;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default ParameterService;
