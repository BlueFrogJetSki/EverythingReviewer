<script setup lang="ts">
import { ref } from 'vue'
import { ValidateJWT } from '~/services/AuthService/ValidateJWT'
import { uploadReview } from '~/services/ReviewService/uploadReview'
import { ValidateText } from '~/utils/ValidateField'

//check unauthorized redirect
if (!(await ValidateJWT())) {
  GoToLogin()
}
const route = useRoute()
const name = (route.params.name as string).toUpperCase()

const text = ref('')
const textError = ref('')

const rating = ref(0)
const ratingError = ref('')

const resultRef = ref('')
const resultErrorRef = ref('')

async function handleSubmit() {

  if (validateForm() == false) return;


  const result = await uploadReview(name, { text: text.value, rating: rating.value }, resultErrorRef);

  if (!result) { return }


  resultRef.value = "upload successful, now redirecting ..."
  GoToItem()


}

async function GoToItem() {
  await navigateTo(`/items/${name}`);
}
//validate each field of the form
function validateForm() {
  clearErrors()

  if (rating.value == 0) {
    ratingError.value = "Rating is required"
  }


  textError.value = ValidateText("text", text.value, 1, 280)

  return (textError.value == '' && ratingError.value == '')

}

function clearForm() {
  text.value = ''
  textError.value = ''
  rating.value = 0;
  ratingError.value = ''
  resultErrorRef.value = ''

}

function clearErrors() {
  textError.value = ''
  resultErrorRef.value = ''
  ratingError.value = ''
}
</script>


<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl mb-6">Leave a review for <span class="text-2xl font-bold">{{ name }}</span></h1>

    <form class="space-y-4" @submit.prevent="handleSubmit">


      <!-- text -->
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description<span
            class="text-red-500">*</span></label>
        <textarea v-model="text" id="text" name="text" rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"></textarea>
        <p v-if="textError" class="text-red-500 text-xs mt-1 " id="text-error">{{ textError }}</p>
      </div>

      <!-- Rating -->
      <Rating v-model="rating" />
      <p v-if="ratingError" class="text-red-500 text-xs mt-1 " id="text-error">{{ ratingError }}</p>

      <!-- Form Actions -->
      <div class="flex justify-end space-x-4 pt-4">
        <button type="button" id="reset-btn"
          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          @click="clearForm">
          Reset
        </button>
        <button type="submit"
          class="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Submit
        </button>
      </div>

      <!-- Submission Feedback -->
      <p v-if="resultErrorRef" class="text-red-500 text-xs p-2">{{ resultErrorRef }}</p>
      <p v-if="resultRef" class="text-green-500 text-xs p-2">{{ resultRef }}</p>

    </form>
  </div>
</template>
