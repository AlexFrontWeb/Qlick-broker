import { Router } from 'express';
import { FlowComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/flows
 * 
 * @swagger
 * /flows:
 *   get:
 *     description: Get all stored flows in Database
 *     tags: ["flows"]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: An array of flows
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Flows'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', FlowComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/flows
 * 
 * @swagger
 * /v1/flows:
 *   post:
 *      description: Create new Flow
 *      tags: ["flows"]
 *      security:
 *       - cookieAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FlowSchema'
 *            example:
 *              name: userName
 *              email: test.user@mail.com
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/FlowSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', FlowComponent.create);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/flows/:id
 * 
 * @swagger
 * /v1/flows/{id}:
 *  get:
 *    description: Get user by userId
 *    tags: ["flows"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return user by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/FlowSchema'
 */
router.get('/:id', FlowComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/flows/:id
 * 
 * @swagger
 * /v1/flows/{id}:
 *  delete:
 *    description: Delete user by userId
 *    tags: ["flows"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/FlowSchema'
 */
router.delete('/:id', FlowComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
