﻿// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information

namespace Dnn.AuthServices.Jwt.Components.Entity
{
    using Newtonsoft.Json;

    /// <summary>
    /// Renewal token data transfer object.
    /// </summary>
    [JsonObject]
    public class RenewalDto
    {
        /// <summary>
        /// A string representing the renewal token.
        /// </summary>
        [JsonProperty("rtoken")]
        public string RenewalToken;
    }
}
