'use strict';

const Model = use('Model');

class BaseRepository {
  async model () {
    return Model;
  }

  async all () {
    return await this.model().all();
  }

  async find ({id}) {
    return await this.model().find(id);
  }

  async findBy ({field, value}) {
    return this.model().findBy(field, value);
  }

  async create (data) {
    if (typeof (data) === 'object')
      return this.model().create(data);
    return null;
  }

  async update ({id, data}) {
    const entity = this.find(id);
    entity.fill(data);
    return entity.save();
  }

  async delete (id) {
    const entity = this.find(id);
    return entity.delete();
  }
}

module.exports = BaseRepository;
