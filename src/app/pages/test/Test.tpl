<div class="page-test well">
	<h1>Test page</h1>
	<p>This is a test page. You came to this page by clicking on <b>Link <%- linkId %></b> from the menu.</p>
	<h3>Template helpers test</h3>
	<p>Each time you visit this page, you should see a different number!</p>
	<p>Random number: <span class="rand"><%- getRandomNumber() %></span></p>

    <h2>Here's a color picker widget</h2>
    <div class="region-color-picker"></div>
</div>