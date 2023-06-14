<script lang="ts">
    import '$lib/styles/text.css';
    import type { Article } from '$lib/types/Article';

	let article: Article = {
		title: 'My FIrst Blog Post',
		publishDate: new Date(2013, 11, 17),
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
			'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
			'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
			'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Eros donec ac odio tempor orci dapibus ultrices in. Consequat semper viverra nam libero justo laoreet sit. Tellus in hac habitasse platea. Feugiat scelerisque varius morbi enim nunc. Vulputate mi sit amet mauris. Egestas congue quisque egestas diam in arcu cursus. Aliquam id diam maecenas ultricies mi. Gravida cum sociis natoque penatibus.' +
			'Nibh praesent tristique magna sit amet. Arcu dictum varius duis at consectetur. Amet nulla facilisi morbi tempus. Ac odio tempor orci dapibus ultrices in iaculis nunc. Dolor sit amet consectetur adipiscing elit ut aliquam. Eu nisl nunc mi ipsum faucibus vitae aliquet. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Feugiat vivamus at augue eget arcu dictum.' +
			'Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio euismod lacinia at quis risus sed vulputate odio. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Iaculis at erat pellentesque adipiscing commodo. Quisque non tellus orci ac. Enim blandit volutpat maecenas volutpat blandit aliquam. Viverra justo nec ultrices dui. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Pulvinar neque laoreet suspendisse interdum consectetur. Sed tempus urna et pharetra pharetra massa massa ultricies. Nec ullamcorper sit amet risus nullam eget. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Non blandit massa enim nec. Turpis cursus in hac habitasse platea dictumst quisque. Sit amet porttitor eget dolor. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Habitant morbi tristique senectus et netus et malesuada fames. Laoreet non curabitur gravida arcu ac.' +
			'Est sit amet facilisis magna etiam. Metus aliquam eleifend mi in nulla posuere sollicitudin. Sed id semper risus in hendrerit gravida rutrum quisque non. Nisl tincidunt eget nullam non nisi est sit. Iaculis urna id volutpat lacus laoreet. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vitae congue mauris rhoncus aenean. Ut lectus arcu bibendum at. Integer quis auctor elit sed vulputate mi sit amet mauris. Tempor orci dapibus ultrices in iaculis nunc sed augue. Eu augue ut lectus arcu bibendum at varius. Amet aliquam id diam maecenas ultricies. Interdum velit laoreet id donec ultrices tincidunt arcu.' +
			'Odio tempor orci dapibus ultrices in iaculis. Odio morbi quis commodo odio. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Aliquam ultrices sagittis orci a scelerisque purus semper. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Varius vel pharetra vel turpis nunc. Pellentesque nec nam aliquam sem et tortor. Sit amet massa vitae tortor condimentum lacinia quis. Suspendisse potenti nullam ac tortor vitae. Purus viverra accumsan in nisl nisi scelerisque. Nunc sed blandit libero volutpat sed cras. Tristique et egestas quis ipsum suspendisse ultrices gravida. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Euismod in pellentesque massa placerat duis ultricies lacus sed. Posuere ac ut consequat semper viverra nam libero. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Nisi scelerisque eu ultrices vitae auctor eu augue ut.'
	};
</script>

<div class="article">
	<div class="title">{article.title}</div>
	<div class="publish-date">{article.publishDate.toDateString()}</div>
	<div class="details">{article.content}</div>
</div>

<style>
	.article {
        display: flex;
		flex-direction: column;
		align-items: flex-start;
        padding: 16px;
		max-width: 1160px ;
		min-width: 360px;
	}
</style>
