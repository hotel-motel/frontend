<template>
  <div>
    <div v-if=" ! room.deleted_at">
      <a href="#deleteRoom">
        <div class="alert alert-danger" data-bs-toggle="collapse" href="#deleteRoom"  aria-expanded="false" aria-controls="deleteRoom">
          <i class='bx bxs-trash'></i>
          Delete Room
        </div>
      </a>
      <div class="collapse mb-3" id="deleteRoom">
        <div class="border border-danger rounded">
          <div class="m-4">
            <div class="d-flex justify-content-between">
              <div>
                <p>
                  Are you sure to delete room? with this action you delete room for ever!
                  Trips reserved until now still valid !
                </p>
              </div>
              <button class="btn btn-danger" @click="deleteRoom()">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger">
        <i class='bx bxs-trash'></i>
        Room has been deleted
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['room'],
  methods:{
    deleteRoom(){
      this.$api.delete('/operator/rooms/'+this.room.id)
      .then(response=> this.$router.push('/operator/hotels/'+this.room.hotel.id));
    }
  }
}
</script>
