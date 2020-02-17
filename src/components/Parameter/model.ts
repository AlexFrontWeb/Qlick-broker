import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface IParameterModel
 * @extends {Document}
 */
export interface IParameterModel extends Document {
    id: String;
    title: String;
    version: String;
    code: String;
    description: String;
    lastUpdateDate: Date;
    isActive: Boolean;
    
}

/**
 * @swagger
 * components:
 *  schemas:
 *    ParameterSchema:
 *      required:
 *        - id
 *        - title
 *        - version
 *      properties:
 *        id:
 *          type: string
 *        title:
 *          type: string
 *        version:
 *          type: string
 *        code:
 *          type: string
 *        description:
 *          type: string
 *        lastUpdateDate:
 *          type: string
 *          format: date
 *        isActive:
 *          type: boolean
 *    Parameters:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ParameterSchema'
 */
const ParameterSchema: Schema = new Schema({
    id: {
        type: String,
        unique: true,
        trim: true
    },
    title: String,
    types: String,
    val: [{ id: String, value: String }],
    flowId : {
        type: Schema.Types.ObjectId,
        ref: 'Flow'
    },
}, {
    collection: 'parametermodel',
    versionKey: false
});

export default connections.db.model < IParameterModel > ('ParameterModel', ParameterSchema);
