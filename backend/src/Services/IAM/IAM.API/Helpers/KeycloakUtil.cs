using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using IAM.API.DTO;
using Newtonsoft.Json;

namespace IAM.API.Helpers
{
    public class KeycloakUtil
    {
        public static async Task<string> GetKeycloakTokenAsync(string environmentName, HttpClient client)
        {
            if (client == null)
            {
#pragma warning disable S2302 // "nameof" should be used
                throw new InvalidOperationException("client is null");
#pragma warning restore S2302 // "nameof" should be used
            }

            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));


            HttpContent content = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("client_id", "admin-cli"),
                new KeyValuePair<string, string>("username", "admin"),
                new KeyValuePair<string, string>("password", "admin1"),
                new KeyValuePair<string, string>("grant_type", "password")
            });

            Uri tokenRequestUri =
                new(
                    $"http://localhost:8024/auth/realms/master/protocol/openid-connect/token");
            using HttpResponseMessage tokenResponse = await client.PostAsync(
                requestUri: tokenRequestUri, content).ConfigureAwait(false);
            tokenResponse.EnsureSuccessStatusCode();
            string responseBody = await tokenResponse.Content.ReadAsStringAsync().ConfigureAwait(false);


            KeycloakRealmAccessResponse keycloakAccessResponse =
                JsonConvert.DeserializeObject<KeycloakRealmAccessResponse>(responseBody);
            content.Dispose();

            return keycloakAccessResponse?.AccessToken;
        }
    }
}