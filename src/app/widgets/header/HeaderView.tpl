<div class="widget-header container">
	<div class="row">
		
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"  data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle Navigation</span>
						<span class="icon-bar">&nbsp;</span>
						<span class="icon-bar">&nbsp;</span>
						<span class="icon-bar">&nbsp;</span>
					</button>
					<a href="#" class="navbar-brand">SockPuppet</a>
				</div>
				<div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">
						<li>
							<a href="#link/1">Link 1</a>
						</li>
						<li>
							<a href="#link/2">Link 2</a>
						</li>
						<li>
							<a href="#link/3">Link 3</a>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<% if (isLoggedIn) { %>
							<li>
								<a href="#profile">Logged in as <%- honorific %> <%- surname %></a>
							</li>
							<li>
								<a href="#logout">Logout</a>
							</li>
						<% } else { %>
							<li>
								<a href="#login">Login</a>
							</li>
						<% } %>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</div>