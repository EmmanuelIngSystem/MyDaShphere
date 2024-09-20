<template>
  <div class="input-field-main">
    <label :for="label">
      <i :class="['fa-solid', icon]"> </i>
      {{ label }}
    </label>
    <input
      :type="type"
      :id="label"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: String,
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    modelValue: String
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
