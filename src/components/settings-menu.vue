<template>
	<div id="settings-menu">
		<nav aria-label="Ayarlar menüsü">
    <ul>
      <li>
        <RouterLink to='/' aria-label="Duyurular sayfasına git">Duyurular</RouterLink>
      </li>
      <li>
        <RouterLink to='/settings' aria-label="Bildirim Ayarları sayfasına git">Bildirim Ayarları</RouterLink>
      </li>
     <li>
       <RouterLink to='/about' aria-label="Uygulama Hakkında sayfasına git">Uygulama Hakkında</RouterLink>
     </li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'settings-menu',
}
</script>
<style scoped></style>
