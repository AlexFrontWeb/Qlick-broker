import * as Joi from 'joi';
import FlowModel, { IFlowModel } from './model';
import FlowValidation from './validation';
import { IFlowService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IFlowModelService}
 */
const FlowService: IFlowService = {
    /**
     * @returns {Promise < IFlowModel[] >}
     * @memberof FlowService
     */
    async findAll(): Promise < IFlowModel[] > {
        try {
            return await FlowModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IFlowModel >}
     * @memberof FlowService
     */
    async findOne(id: string): Promise < IFlowModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = FlowValidation.getFlow({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await FlowModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IFlowModel} flow
     * @returns {Promise < IFlowModel >}
     * @memberof FlowService
     */
    async insert(body: IFlowModel): Promise < IFlowModel > {
        try {
            const validate: Joi.ValidationResult < IFlowModel > = FlowValidation.createFlow(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const flow: IFlowModel = await FlowModel.create(body);

            return flow;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IFlowModel >}
     * @memberof FlowService
     */
    async remove(id: string): Promise < IFlowModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = FlowValidation.removeFlow({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const flow: IFlowModel = await FlowModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return flow;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default FlowService;
