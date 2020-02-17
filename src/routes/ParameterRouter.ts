import { Router } from 'express';
import { ParameterComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/parameters
 * 
 * @swagger
 * /parameters:
 *   get:
 *     description: Get all stored parameters in Database
 *     tags: ["parameters"]
 *     security:
 *      - cookieAuth: []
 *     responses:
 *       200:
 *         description: An array of parameters
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
router.get('/', ParameterComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/parameters
 * 
 * @swagger
 * /v1/parameters:
 *   post:
 *      description: Create new Flow
 *      tags: ["parameters"]
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
router.post('/', ParameterComponent.create);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/parameters/:id
 * 
 * @swagger
 * /v1/parameters/{id}:
 *  get:
 *    description: Get user by userId
 *    tags: ["parameters"]
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
router.get('/:id', ParameterComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/parameters/:id
 * 
 * @swagger
 * /v1/parameters/{id}:
 *  delete:
 *    description: Delete user by userId
 *    tags: ["parameters"]
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
router.delete('/:id', ParameterComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
