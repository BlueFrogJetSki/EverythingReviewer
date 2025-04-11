<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Create New Event</h1>

    <form class="space-y-4" @submit.prevent="handleSubmit">
      <!-- Title -->
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Event Title<span
            class="text-red-500">*</span></label>
        <input v-model="title" type="text" id="title" name="title" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        <p v-if="titleError"  class="text-red-500 text-xs mt-1" id="title-error">{{ titleError }}</p>
      </div>
      <!-- Image -->
      <div class="space-y-2">
        <label for="imageURL" class="block text-sm font-medium text-gray-700">Upload Image<span
            class="text-red-500">*</span></label>
        <input type="file" id="image" name="image" accept="image/*" @change="handleImageChange"
          class="w-full rounded-lg border border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
        <p id="image-error" v-if="imageError" class="text-xs text-red-500">{{ imageError }}</p>
        <p id="image-error" v-if="imageUploadResult" class="text-xs text-green-600">{{ imageUploadResult }}</p>

        <div class="flex justify-center items-center relative rounded-xl overflow-hidden">
          <!-- Background Image with matte effect -->
          <div v-if="imageURL" class="absolute inset-0 bg-center bg-cover blur-sm brightness-75"
          :style="{ backgroundImage: `url('${imageURL}')` }">
          </div>

          <!-- Foreground Image -->
          <img v-if="imageURL" id="image-preview"
            :src=imageURL
            alt="Image preview" class="h-40 w-40 object-cover rounded-lg shadow relative z-10" />
        </div>



      </div>
      <!-- Description -->
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description<span
            class="text-red-500">*</span></label>
        <textarea v-model="description" id="description" name="description" rows="3" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"></textarea>
        <p v-if = "descriptionError" class="text-red-500 text-xs mt-1 " id="description-error">{{ descriptionError }}</p>
      </div>

      <!-- Location -->

      <div>
        <label for="Location" class="block text-sm font-medium text-gray-700">Location<span
            class="text-red-500">*</span></label>
        <input v-model="location" id="Location" name="Location" rows="3" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"></input>
        <p v-if = "locationError" class="text-red-500 text-xs mt-1 " id="Location-error">{{ locationError }}</p>
      </div>


      <!-- Date & Time -->
      <div>
        <label for="date" class="block text-sm font-medium text-gray-700">Event Date & Time<span
            class="text-red-500">*</span></label>
        <input v-model = "dateTime" type="datetime-local" id="date" name="date" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        <p class="text-xs text-gray-500 mt-1" id="date-helper">Select a date</p>
        <p v-if="dateTimeError" class="text-red-500 text-xs mt-1 " id="date-error">{{ dateTimeError }}</p>
      </div>

      <!-- Minimum Age -->
      <div>
        <label for="minimum_age" class="block text-sm font-medium text-gray-700">Minimum Age</label>
        <input v-model="minimumAge" type="number" id="minimum_age" name="minimum_age" min="0"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        <p  v-if = "minimumAgeError" class="text-red-500 text-xs mt-1" id="minimum_age-error">Age cannot be negative</p>
      </div>

      <!-- Admission Fee -->
      <div>
        <label for="admission_fee" class="block text-sm font-medium text-gray-700">Admission Fee ($)</label>
        <input v-model="admissionFee" type="number" id="admission_fee" name="admission_fee" min="0" step="0.01"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        <p v-if="admissionFeeError" class="text-red-500 text-xs mt-1" id="admission_fee-error">Fee cannot be negative</p>
      </div>

      <!-- Form Actions -->
      <div class="flex justify-end space-x-4 pt-4">
        <button type="button" id="reset-btn"
          class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          Reset
        </button>
        <button type="submit"
          class="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create Event
        </button>
      </div>

      <!-- Submission Feedback -->
      <div id="submit-error" class="p-4 bg-red-50 text-red-700 rounded-md hidden"></div>
      <div id="submit-success" class="p-4 bg-green-50 text-green-700 rounded-md hidden">
        Event created successfully!
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import { handleImageUpload } from '~/services/ImageUploadService/ImageUploadService'
import { ValidateText } from '~/utils/ValidateField'

const image = ref<File | null>(null)
const imageUploadResult = ref('')
const imageURL = ref('')
const imageError = ref('')

const title = ref('')
const titleError = ref('')

const description = ref('')
const descriptionError = ref('')

const location = ref('')
const locationError = ref('')


const dateTime = ref('');
const dateTimeError = ref('')

const minimumAge = ref<number>(0)
const minimumAgeError = ref('')

const admissionFee = ref<number>(0)
const admissionFeeError = ref('')


async function handleSubmit() {
  
  validateForm()
}


async function handleImageChange(event: Event) {
  imageUploadResult.value = ''
  imageError.value = ''
  imageURL.value = ''
  const target = (event.target as HTMLInputElement)

  const file = target.files?.[0] || null

  if (file == null) {
    //give err message
    imageError.value = "File missing"
    return
  }

  try {
    //upload image to s3 bucket
    const imageUrl = await handleImageUpload(file)
    //give sccuess message
    imageUploadResult.value = "Image upload sccessful"
    imageURL.value = imageUrl

  } catch (error) {
    //give err message
    if (error instanceof Error) {
      imageError.value = error.message
    }
  }

}

//validate each field of the form
function validateForm(){
  ValidateText("Title", title.value, 1, 80, titleError)
  ValidateText("Description", description.value, 1, 280, descriptionError)
  ValidateText("Location", location.value, 1, 280, locationError)
  ValidateDateTime("Event Date & Time", dateTime.value, dateTimeError)

}



function clearForm() {
  title.value = ''
  image.value = null
  description.value = ''
  dateTime.value = ''
  minimumAge.value = 0
  admissionFee.value = 0
}
</script>