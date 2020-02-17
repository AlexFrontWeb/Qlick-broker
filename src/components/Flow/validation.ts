import * as Joi from 'joi';
import Validation from '../validation';
import { IFlowModel } from './model';

/**
 * @export
 * @class FlowValidation
 * @extends Validation
 */
class FlowValidation extends Validation {

    /**
     * Creates an instance of FlowValidation.
     * @memberof FlowValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IFlowModel} params
     * @returns {Joi.ValidationResult<IFlowModel >}
     * @memberof FlowValidation
     */
    createFlow(
        params: IFlowModel
    ): Joi.ValidationResult < IFlowModel > {
        const schema: Joi.Schema = Joi.object().keys({
            title: Joi.string().required(),
            version: Joi.string().alphanum().min(3).max(30).required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof FlowValidation
     */
    getFlow(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof FlowValidation
     */
    removeFlow(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new FlowValidation();
