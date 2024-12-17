/**
 * @schema StorePriceRule
 * type: object
 * description: The price rule's details.
 * x-schemaName: StorePriceRule
 * required:
 *   - id
 *   - attribute
 *   - operator
 *   - value
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The price rule's ID.
 *   attribute:
 *     type: string
 *     title: attribute
 *     description: The price rule's attribute.
 *   operator:
 *     type: string
 *     description: The price rule's operator.
 *     enum:
 *       - gt
 *       - lt
 *       - eq
 *       - lte
 *       - gte
 *   value:
 *     type: string
 *     title: value
 *     description: The price rule's value.
 * 
*/
