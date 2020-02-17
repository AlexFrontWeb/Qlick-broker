import * as Joi from 'joi';
import Validation from '../validation';
import { IParameterModel } from './model';

/**
 * @export
 * @class ParameterValidation
 * @extends Validation
 */
class ParameterValidation extends Validation {

    /**
     * Creates an instance of ParameterValidation.
     * @memberof ParameterValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IParameterModel} params
     * @returns {Joi.ValidationResult<IParameterModel >}
     * @memberof ParameterValidation
     */
    createParameter(
        params: IParameterModel
    ): Joi.ValidationResult < IParameterModel > {
        const schema: Joi.Schema = Joi.object().keys({
            flowId: Joi.string().required(),
            val: Joi.string().alphanum().min(3).max(30).required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ParameterValidation
     */
    getParameter(
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
     * @memberof ParameterValidation
     */
    removeParameter(
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

export default new ParameterValidation();
