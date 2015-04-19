<div class="page-test well">
	<h1>Test page</h1>
	<p>This is a test page. You came to this page by clicking on <b>Link <%- linkId %></b> from the menu.</p>
	<h3>Template helpers test</h3>
	<p>Each time you visit this page, you should see a different number!</p>
	<p>Todays winning numbers are: <span class="the-numbers"><%- getRandomNumbers() %></span></p>
</div>