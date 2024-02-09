// import type { HttpContext } from '@adonisjs/core/http'

import Post from "#models/mongoos/post";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {

    public async index({ response, view }: HttpContext) {
        const posts = await Post.find();
        console.log(posts);
        return response.status(200).send(posts);
        return view.render('welcome', {
            posts: posts
        })
    }
}
