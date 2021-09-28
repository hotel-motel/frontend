<template>
  <div>
    <div v-if=" ! room.deleted_at">
      <a href="#editRoom">
        <div class="alert alert-warning" data-bs-toggle="collapse" href="#editRoom"  aria-expanded="false" aria-controls="editRoom">
          <i class='bx bxs-trash'></i>
          Edit Room
        </div>
      </a>
      <div class="collapse mb-3" id="editRoom">
        <div class="border border-warning rounded">
          <div class="m-4">
            <div class="d-flex justify-content-between">
              <div>
                <p>
                  You can edit price and capacity of room.
                  Trips reserved until now still valid with this old price and capacity !
                </p>
              </div>
              <button class="btn btn-warning" @click="editRoom()">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['room'],
  methods:{
    editRoom(){
      this.$router.push('/operator/rooms/'+this.$route.params.id+'/edit')
    }
  }
}
</script>
