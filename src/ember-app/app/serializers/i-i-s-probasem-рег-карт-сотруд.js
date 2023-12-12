import { Serializer as РегКартСотрудSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probasem-рег-карт-сотруд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегКартСотрудSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
