import { Serializer as РегисКартГостейSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probasem-регис-карт-гостей';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегисКартГостейSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
