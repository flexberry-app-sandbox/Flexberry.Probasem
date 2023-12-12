import { Serializer as РегистрацВходSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probasem-регистрац-вход';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрацВходSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
