import { Serializer as КарДосSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КарДосSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
