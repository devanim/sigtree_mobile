export const AUTH_MOCK = {
  BASE_URL: "https://customer1.sigtree.com",
  VERSION: "v1",
  TOKEN: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYVG11RFZKXzczanp1RURyV0duY09iNzFaQkFKWUhLM2xsc29va084T2drIn0.eyJleHAiOjE2NjU2ODg2MTksImlhdCI6MTY2NTY4ODMxOSwianRpIjoiODBhMzE3ZjktMDE3MS00ZGQzLTg3MDItN2Y4MTk5NjNhNzc0IiwiaXNzIjoiaHR0cHM6Ly9zc28uc2lndHJlZS5jb20vYXV0aC9yZWFsbXMvY3VzdG9tZXIxIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjUyOGNmOWZjLTIyNmItNDljYy1hMzI3LTlkNGYwZWMwZjQwNSIsInR5cCI6IkJlYXJlciIsImF6cCI6InNpZ3RyZWUiLCJzZXNzaW9uX3N0YXRlIjoiMzcwYWNjNTQtNTFkNC00NmUwLWIzNzEtOWIzZGRkMzFiOGVjIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zaWd0cmVlIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjM3MGFjYzU0LTUxZDQtNDZlMC1iMzcxLTliM2RkZDMxYjhlYyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXNpZ3RyZWUiLCJ1bWFfYXV0aG9yaXphdGlvbiIsIkFETUlOIl0sIm5hbWUiOiJBZG1pbiBDdXN0b21lciIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluLmN1c3RvbWVyIiwiZ2l2ZW5fbmFtZSI6IkFkbWluIiwidXNlcklkIjoiMiIsImZhbWlseV9uYW1lIjoiQ3VzdG9tZXIiLCJlbWFpbCI6ImFkbWluLmN1c3RvbWVyQGN1c3RvbWVyLWRvbWFpbi5jb20ifQ.pKEHJWKwq7EPJvrbA4-SwlMz1D83EJAdU4IzrwFdxeLWFKj_9vwPrdPuCEEezB5GeN-YEdw_kyEjCn3UirzAoCEWRpBemJeALABQAHRmc5WY9RNvRAHD8KBukGccGsQV7eBx6s52o-r1JhVzAghUkgt_WiytahuWVz3aU8CPARUFyZWGqR-CpQqnpf1nZMsRqWa5LxMFJeyGtyoO4HVapg_sResEr3rVY_t6aDdyqV_6k72OWI2azWed1VDBp_oZwNLCYjJP9ubuDySjC6XR8xuT_FjE07ABMhhmK99twEBvmcmIXSZ_pu1rHL6aDaVwMnHqmGnvKg7SZdFnA1bRcw"
}

export const SCREEN_URL = {
  TOS_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/tos`,
  ARTICLES_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/articles`,
  ARTICLE_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/article`,
  TICKETS_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/tickets`,
  TICKET_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/ticket`,
  USER_PROFILE_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/user`,
  STATISTICS_URL: `${AUTH_MOCK.BASE_URL}/api/${AUTH_MOCK.VERSION}/statistics`
}

export const CONFIG = {
  ITEMS_PER_PAGE: "6",
  ITEMS_PER_CAROUSEL: "5"
}