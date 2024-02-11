import type { ApplicationService } from '@adonisjs/core/types'
import env from '#start/env'
import mongoose from 'mongoose'
export default class MongoProvider {
  constructor(protected app: ApplicationService) { }

  /**
   * Register bindings to the container
   */
  register() {
    const uri = env.get('MONGODB_CONNECTION_URI', "");
    mongoose.connect(uri)
      .then(() => {
        console.log('Connected to MongoDB!');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });

    // binding
    // this.app.container.singleton('TEST_BINDING', () => {
    //   return {
    //     name: "testing binding"
    //   }
    // })

    // call binding
    // const bindingData = await app.container.make('TEST_BINDING');
  }

  /**
   * The container bindings have booted
   */
  async boot() { }

  /**
   * The application has been booted
   */
  async start() { }

  /**
   * The process has been started
   */
  async ready() { }

  /**
   * Preparing to shutdown the app
   */
  async shutdown() { }
}