'use strict';

const BaseRepository = use('App/Domain/Repositories/BaseRepository');
const Room           = use('App/Domain/Models/Chat/Room');

class RoomRepository extends BaseRepository {
  model() {
    return Room;
  }
}

module.exports = RoomRepository;
