/*****************************************************************************************************************************************************
 * This service handles the retrieval of mock data from a simulated backend endpoint as defined here and in `app.module.ts`.
 *
 * {@link https://www.npmjs.com/package/angular-in-memory-web-api | Angular In-Memory-Web-API NPM Page}
 ****************************************************************************************************************************************************/

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { InMemoryDatabase } from '@core/services/in-memory-data/in-memory-data.model';
import { User } from '@core/services/user/user.model';

import allUsers from '@core/mocks/all-users.json';

@Injectable({ providedIn : 'root' })
export class InMemoryDataService implements InMemoryDbService {
  private readonly _allUsers : User[] = allUsers;

  /**
   * Creates the in-memory database to be used as a mock backend. This is required to implement the InMemoryDbService interface. To access data under
   * this database, direct HTTP requests to the `apiBase` property defined in `IN_MEMORY_BACKEND_CONFIG_ARGS` in `app.model.ts`.
   *
   * @returns a database object structured such that the properties contained within are synonymous with data endpoints.
   *
   * @example If we wanted to access all users in the database, we'd direct an HTTP request to `allUsers`, assuming a default `apiBase`.
   */
  public createDb() : InMemoryDatabase {
    return {
      allUsers : this._allUsers
    };
  }
}
