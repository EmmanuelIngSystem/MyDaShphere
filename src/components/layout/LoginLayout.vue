<template>
  <div class="parent-login-layout">
    <div class="login-layout">
      <header>Login</header>
      <main>
        <slot />
      </main>
      <footer>&copy; 2024 MyDaShphere</footer>
      <!-- &copy; -> @ (simbolo de copyright) -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginLayout'
}
</script>
