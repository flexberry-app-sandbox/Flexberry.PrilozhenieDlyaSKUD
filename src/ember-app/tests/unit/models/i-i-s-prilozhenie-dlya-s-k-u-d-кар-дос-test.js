import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос', 'Unit | Model | i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-dlya-s-k-u-d-админ',
    'model:i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос',
    'model:i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
