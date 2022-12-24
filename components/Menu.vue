<template>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink  to="/" class="nav-link active">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
        </a>
        <ul class="dropdown-menu">
            <li>
              <NuxtLink to="/contact/email" class="dropdown-item">Email</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact/wa" class="dropdown-item">Whatsapp</NuxtLink>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
    </ul>  
</template>