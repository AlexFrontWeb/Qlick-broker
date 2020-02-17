import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface IFlowModel
 * @extends {Document}
 */
export interface IFlowModel extends Document {
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
 *    FlowSchema:
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
 *    Flows:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/FlowSchema'
 */
const FlowSchema: Schema = new Schema({
    id: {
        type: String,
        unique: true,
        trim: true
    },
    title: String,
    version: String,
    code: String,
    description: String,
    isActive: Boolean,
    lastUpdateDate: Date,
}, {
    collection: 'flowmodel',
    versionKey: false
});

export default connections.db.model < IFlowModel > ('FlowModel', FlowSchema);
