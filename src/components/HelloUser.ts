import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'HelloUser',
  setup() {
    // Define state using ref for reactivity
    const userEmail = ref<string>('')
    const userGreeting = ref<string>('')

    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8081')
        userEmail.value = response.data['your email is']
        userGreeting.value = response.data['hello']
        console.log(userEmail.value);
        console.log(userGreeting.value)
      } catch (error) {
        console.error('There was an error fetching user data:', error)
      }
    }

    // Fetch data when component is mounted
    onMounted(fetchUserData)

    return {
      userEmail,
      userGreeting,
    }
  },
})
