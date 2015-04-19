<div class="page-profile well">
	<h1>Profile</h1>
	<% if (isLoggedIn) { %>
		<table class="table table-hover">
			<tr>
				<th>honorific</th>
				<td><%- honorific %></td>
			</tr>
			<tr>
				<th>forename</th>
				<td><%- forename %></td>
			</tr>
			<tr>
				<th>surname</th>
				<td><%- surname %></td>
			</tr>
			<tr>
				<th>lifestory</th>
				<td><%- lifestory %></td>
			</tr>
		</table>
	<% } else { %>
		<p>You are not logged in!</p>
	<% } %>
</div>