// import type { HttpContext } from '@adonisjs/core/http'

import Post from "#models/mongoos/post";
import { HttpContext } from "@adonisjs/core/http";

export default class HomeController {

    public async index({ view }: HttpContext) {
        return view.render('pages/home')
    }

    public async create() {
        // const post = await Post.create({
        //     title: 'test',
        //     content: 'testing'
        // })

        return { "data": "Item created" }
    }

    public async search({ request }: HttpContext) {

        if (!request.qs().query)
            return null;

        const searchTerm = request.qs().query
        const posts = await Post
            .find({
                $or: [
                    { title: { $regex: searchTerm, $options: 'i' } },
                    { content: { $regex: searchTerm, $options: 'i' } }
                ]
            })
            .sort({ _id: -1 })
            .limit(5);
        return posts
    }
}
