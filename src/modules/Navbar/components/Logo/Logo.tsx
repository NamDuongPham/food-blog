import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../../../constants/site-map";

function Logo() {
  const navigate= useNavigate()
  const onHandleBack=()=>{
    navigate(SITE_MAP.HOME.url)
  }
  return (
    <img
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="200"
      width="200"
      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxMy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDE0OTQ4KSAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMSBUaW55Ly9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLXRpbnkuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTQ1Ljk4OXB4IiBoZWlnaHQ9IjE5LjEzOXB4IiB2aWV3Qm94PSIwIDAgMTQ1Ljk4OSAxOS4xMzkiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45MTYsNS4wODFIMHYyLjgwMWgxLjI0M3Y0LjI0N0gwdjIuOGg3LjE1OXYtMi44SDUuOTE2VjUuMDgxeiBNMzkuODYzLDguMTIzDQoJCWMwLTEuODU0LTEuMTEzLTMuMjQ1LTIuNzYzLTMuMjQ1Yy0xLjc4LDAtMy4wMDQsMS4xMzEtMy42MzUsMi4zMzZjLTAuMjc4LTEuNDI4LTEuMjk4LTIuMzM2LTIuNjg5LTIuMzM2DQoJCWMtMS43MjUsMC0yLjkzLDEuMTMxLTMuNTYxLDIuMzE4VjUuMDgxaC01LjcxMnYyLjgwMWgxLjIyNHYzLjkzMmgtMS41NDR2MC42ODZjMCwwLjI3OC0wLjEzLDAuNDI3LTAuMzcxLDAuNDI3DQoJCWMtMC4yMjMsMC0wLjM1Mi0wLjE0OC0wLjM1Mi0wLjQyN1Y4LjEwNGMwLTEuNzI1LTEuNzYyLTMuMjQ1LTQuOTg5LTMuMjQ1Yy0zLjIwOCwwLTQuNzExLDEuMzcyLTQuNzExLDIuNjUyDQoJCWMwLDEuMTEzLDAuNzc5LDEuNzk5LDIuMTUxLDEuNzk5YzEuMzczLDAsMi4wMjEtMC41MzgsMi4wMjEtMS4xNjhjMC0wLjIyMi0wLjA5My0wLjM3MS0wLjA5My0wLjU3NQ0KCQljMC0wLjI0MSwwLjE0OC0wLjQyNywwLjU1Ny0wLjQyN2MwLjUxOSwwLDAuNTc1LDAuMzM0LDAuNTc1LDAuODM0djEuNTU4Yy0zLjUyMywwLjA5My02LjA4MywwLjg3MS02LjA4MywzLjAyMg0KCQljMCwxLjY4OCwxLjU0LDIuNTc4LDMuNTA1LDIuNTc4YzEuMjQyLDAsMi41MjItMC42NDksMy4wMDQtMS40MjhjMC40NjMsMC44NzEsMS43NjIsMS40MjgsMy4wNDIsMS40MjgNCgkJYzAuODQsMCwxLjUyOS0wLjIwNCwyLjA2My0wLjU1NXYwLjM1MWg2LjI2OXYtMi44aC0wLjU1N1Y5LjU4OGMwLjMxNS0xLjI0MywwLjgxNi0xLjg1NCwxLjI4LTEuODU0DQoJCWMwLjUxOSwwLDAuNTU2LDAuNzc5LDAuNTU2LDEuNjMydjIuNzY0aC0wLjUzOHYyLjhoNS41NjN2LTIuOGgtMC41MzhWOS41ODhjMC4zMTUtMS4yNDMsMC43OTctMS44NTQsMS4yNzktMS44NTQNCgkJYzAuNTIsMCwwLjU1NywwLjc3OSwwLjU1NywxLjYzMnYyLjc2NGgtMC41Mzh2Mi44aDYuMjV2LTIuOGgtMS4yMjRWOC4xMjN6IE0xNS45NzIsMTIuMDM2YzAsMC4zODktMC4zMzQsMC43MjMtMC43NiwwLjcyMw0KCQljLTAuNDY0LDAtMC43NDItMC4yNi0wLjc0Mi0wLjcwNGMwLTAuNjEyLDAuNDgyLTEuMTEzLDEuNTAyLTEuMTg4VjEyLjAzNnogTTU1LjAyNCwxMi40OTljMCwwLjI3OC0wLjEzLDAuNDI3LTAuMzcxLDAuNDI3DQoJCWMtMC4yMjMsMC0wLjM1My0wLjE0OC0wLjM1My0wLjQyN1Y4LjEwNGMwLTEuNzI1LTEuNzYyLTMuMjQ1LTQuOTg4LTMuMjQ1Yy0zLjIwOCwwLTQuNzExLDEuMzcyLTQuNzExLDIuNjUyDQoJCWMwLDEuMTEzLDAuNzc5LDEuNzk5LDIuMTUxLDEuNzk5YzEuMzczLDAsMi4wMjEtMC41MzgsMi4wMjEtMS4xNjhjMC0wLjIyMi0wLjA5My0wLjM3MS0wLjA5My0wLjU3NQ0KCQljMC0wLjI0MSwwLjE0OC0wLjQyNywwLjU1Ny0wLjQyN2MwLjUxOSwwLDAuNTc1LDAuMzM0LDAuNTc1LDAuODM0djEuNTU4Yy0zLjUyMywwLjA5My02LjA4MywwLjg3MS02LjA4MywzLjAyMg0KCQljMCwxLjY4OCwxLjU0LDIuNTc4LDMuNTA1LDIuNTc4YzEuMjQyLDAsMi41MjItMC42NDksMy4wMDQtMS40MjhjMC40NjMsMC44NzEsMS43NjIsMS40MjgsMy4wNDIsMS40MjgNCgkJYzIuMDk1LDAsMy4zMDEtMS4yMjQsMy4zMDEtMy4wMDR2LTAuMzE1aC0xLjU1OFYxMi40OTl6IE00OS44MTIsMTIuMDM2YzAsMC4zODktMC4zMzQsMC43MjMtMC43NiwwLjcyMw0KCQljLTAuNDY0LDAtMC43NDItMC4yNi0wLjc0Mi0wLjcwNGMwLTAuNjEyLDAuNDgyLTEuMTEzLDEuNTAyLTEuMTg4VjEyLjAzNnogTTY0Ljk4OSw3Ljg4MmgxLjYzMlY1LjA4MWgtMS42MzJ2LTEuOTENCgkJYzAtMC4zODksMC4xODYtMC43MDUsMC42NDktMC43MDVjMS4yNjEsMCwwLjY4NiwyLjE1MSwyLjU3OCwyLjE1MWMxLjE2OCwwLDEuNjE0LTAuNzQyLDEuNjE0LTEuNjMyYzAtMS4wOTQtMS4yNDMtMi40My00LjQ3LTIuNDMNCgkJYy0zLjM1NiwwLTUuMDQ0LDEuNzgtNS4wNDQsNC41MjVoLTEuNDI4djIuODAxaDEuNDI4djQuMjQ3aC0xLjI0M3YyLjhoNy4zNDR2LTIuOGgtMS40MjhWNy44ODJ6IE0xMDAuMzQ4LDAuOTQ2aC01LjkxNnYyLjhoMS4yMjUNCgkJdjIuNDg1Yy0wLjY4Ny0wLjg3Mi0xLjc0My0xLjM1NC0yLjgwMS0xLjM1NGMtMi4wNDIsMC0zLjQ3OSwxLjQyNy0zLjg1OSwzLjgyNWMtMC42MDYtMi40MDEtMi44NzYtMy44MjUtNS41ODUtMy44MjUNCgkJYy0yLjY4MiwwLTQuOTM0LDEuMzk3LTUuNTY1LDMuNzU3Yy0wLjYzMy0yLjM2LTIuODg0LTMuNzU3LTUuNTY2LTMuNzU3Yy0zLjE3MSwwLTUuNzQ5LDEuOTQ3LTUuNzQ5LDUuMTM3DQoJCWMwLDMuMTcxLDIuNTc4LDUuMTE5LDUuNzQ5LDUuMTE5YzIuNjgzLDAsNC45MzQtMS4zOTcsNS41NjYtMy43NDZjMC42MzIsMi4zNDksMi44ODQsMy43NDYsNS41NjUsMy43NDYNCgkJYzIuNzA5LDAsNC45NzktMS40MjQsNS41ODUtMy44MTNjMC4zOCwyLjM4NywxLjgxNywzLjgxMywzLjg1OSwzLjgxM2MxLjA1OCwwLDIuMTE0LTAuNDgyLDIuODAxLTEuMzU0djEuMTQ5aDUuOTE2di0yLjhoLTEuMjI1DQoJCVYwLjk0NnogTTczLjA3OCwxMS41OTFjMCwwLjYzMS0wLjIyMywxLjExMi0wLjc5OCwxLjExMmMtMC41NzUsMC0wLjgxNi0wLjQ4MS0wLjgxNi0xLjExMlY4LjQzOGMwLTAuNjQ5LDAuMjQxLTEuMTMxLDAuODE2LTEuMTMxDQoJCWMwLjU3NSwwLDAuNzk4LDAuNDgyLDAuNzk4LDEuMTMxVjExLjU5MXogTTg0LjIwOSwxMS41OTFjMCwwLjYzMS0wLjIyMywxLjExMi0wLjc5OCwxLjExMmMtMC41NzQsMC0wLjgxNS0wLjQ4MS0wLjgxNS0xLjExMlY4LjQzOA0KCQljMC0wLjY0OSwwLjI0MS0xLjEzMSwwLjgxNS0xLjEzMWMwLjU3NSwwLDAuNzk4LDAuNDgyLDAuNzk4LDEuMTMxVjExLjU5MXogTTk1LjY1NywxMS4yMzhjMCwwLjcyNC0wLjI2LDEuMjc5LTAuOTA5LDEuMjc5DQoJCWMtMC42NjgsMC0wLjkyNy0wLjU1Ni0wLjkyNy0xLjI3OVY4Ljc3MmMwLTAuNzI0LDAuMjU5LTEuMjYxLDAuOTI3LTEuMjYxYzAuNjQ5LDAsMC45MDksMC41MzgsMC45MDksMS4yNjFWMTEuMjM4eiBNMTI4LjU3LDQuODc3DQoJCWMtMy4xNzEsMC01Ljc0OSwxLjk0Ny01Ljc0OSw1LjEzN2MwLDAuNzg0LDAuMTU4LDEuNDkyLDAuNDQzLDIuMTE1aC0xLjAzOVYwLjk0NmgtNS45MTZ2Mi44aDEuMjQydjguMzgzaC0xLjE1Ng0KCQljMC4xODItMC42MjMsMC4yNzktMS4zMzEsMC4yNzktMi4xMTVjMC0zLjE4OS0xLjU3Ni01LjEzNy0zLjk2OS01LjEzN2MtMS4wMzgsMC0yLjA5NiwwLjQ4Mi0yLjgsMS4zNTRWMC45NDZoLTUuOTE2djIuOGgxLjI0Mg0KCQl2MTEuMTgzaDMuNTQybDEuMTMyLTEuMTQ5YzAuNzA0LDAuODcxLDEuNzYyLDEuMzU0LDIuOCwxLjM1NGMxLjcyMywwLDMuMDExLTEuMDIyLDMuNjA0LTIuNzcxdjIuNTY3aDcuMTU4di0yLjQxMg0KCQljMC45NTgsMS42NTksMi44ODMsMi42MTYsNS4xMDMsMi42MTZjMy4xNzEsMCw1Ljc0OS0xLjk0Nyw1Ljc0OS01LjExOUMxMzQuMzE5LDYuODI1LDEzMS43NDEsNC44NzcsMTI4LjU3LDQuODc3eiBNMTExLjc0MiwxMS4yMzgNCgkJYzAsMC43MjQtMC4yNiwxLjI3OS0wLjkwOSwxLjI3OWMtMC42NjcsMC0wLjkyNy0wLjU1Ni0wLjkyNy0xLjI3OVY4Ljc3MmMwLTAuNzI0LDAuMjYtMS4yNjEsMC45MjctMS4yNjENCgkJYzAuNjQ5LDAsMC45MDksMC41MzgsMC45MDksMS4yNjFWMTEuMjM4eiBNMTI5LjM2OCwxMS41OTFjMCwwLjYzMS0wLjIyMywxLjExMi0wLjc5OCwxLjExMnMtMC44MTYtMC40ODEtMC44MTYtMS4xMTJWOC40MzgNCgkJYzAtMC42NDksMC4yNDEtMS4xMzEsMC44MTYtMS4xMzFzMC43OTgsMC40ODIsMC43OTgsMS4xMzFWMTEuNTkxeiBNMTQzLjYzMyw2LjQxN2MwLjU1NywwLDAuMjYsMS4wMiwxLjI3OSwxLjAyDQoJCWMwLjY2OCwwLDEuMDc2LTAuNTkzLDEuMDc2LTEuMTg3YzAtMC44MzQtMC42MzEtMS4zNzItMS41NTgtMS4zNzJjLTAuNzYxLDAtMS40NjYsMC40MjYtMS45MSwxLjAyDQoJCWMtMC43MDUtMC42MzEtMS44MzctMS4wMi0zLjQzMi0xLjAyYy0yLjkxMSwwLTQuMzAzLDEuNTc2LTQuMzAzLDMuMzE5YzAsMC43OTcsMC4zMzQsMS44OTIsMS4wMzksMi40MjkNCgkJYy0xLjI0MiwwLjYxMi0yLjAwMywxLjM1NC0yLjAwMywyLjYzNGMwLDAuOTA5LDAuNTk0LDEuNzgsMS4zMTYsMi4xMzNjLTAuNjQ4LDAuMjYtMS4yMjQsMC45MjctMS4yMjQsMS43OA0KCQljMCwwLjg5MSwwLjYxMiwxLjk2NiwyLjY4OSwxLjk2NmgzLjU0MmMzLjIyNywwLDQuODk2LTIuMTE0LDQuODk2LTQuMDA2YzAtMS44NzMtMS4xMzEtMi44MTktMy41NjEtMi44MTloLTQuMDgNCgkJYy0wLjQ0NSwwLTAuNzIzLTAuMzE0LTAuNzIzLTAuNTU2YzAtMC4xNjcsMC4xMjktMC4zOSwwLjMzMy0wLjUzOGMwLjUzOCwwLjE4NiwxLjI4LDAuMjk3LDIuMDc3LDAuMjk3DQoJCWMyLjkzMSwwLDQuMzIxLTEuNTU4LDQuMzIxLTMuMzJjMC0wLjQ2My0wLjExMS0xLjE1LTAuMjYtMS40NjVDMTQzLjI2Miw2LjU0NiwxNDMuNDQ4LDYuNDE3LDE0My42MzMsNi40MTd6IE0xNDEuMzE1LDE2LjA2MQ0KCQljMC4zMzQsMCwwLjQyNywwLjIyMiwwLjQyNywwLjM4OWMwLDAuMjIzLTAuMTQ4LDAuNTU3LTAuNjEyLDAuNTU3aC00LjIyOWMtMC4zMTUsMC0wLjU3NC0wLjI0MS0wLjU3NC0wLjUwMQ0KCQljMC0wLjIwNCwwLjExMS0wLjQwNywwLjMzMy0wLjQ0NEgxNDEuMzE1eiBNMTM5LjU1Myw5LjMyOGMwLDAuMzE1LTAuMTMsMC41MzgtMC40NjQsMC41MzhjLTAuMzE1LDAtMC40NDQtMC4yMjItMC40NDQtMC41MzhWNy4wNjUNCgkJYzAtMC4zMTUsMC4xMjktMC41MzgsMC40NDQtMC41MzhjMC4zMzQsMCwwLjQ2NCwwLjIyMywwLjQ2NCwwLjUzOFY5LjMyOHogTTMuNTIyLDQuNDUzYzEuMjI5LDAsMi4yMjctMC45OTcsMi4yMjctMi4yMjcNCgkJUzQuNzUyLDAsMy41MjIsMFMxLjI5NiwwLjk5NywxLjI5NiwyLjIyNlMyLjI5Myw0LjQ1MywzLjUyMiw0LjQ1M3oiLz4NCjwvZz4NCjwvc3ZnPg0K"
      onClick={()=>{onHandleBack()}}
      ></img>
  );
}

export default Logo;