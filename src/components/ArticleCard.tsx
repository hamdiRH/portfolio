import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

export function ArticleCard({ title, slug, user, createdAt }: any) {
    return (
        <div className="mb-4 p-6 bg-white shadow-sm border rounded break-words">
            <small className="text-gray-600">{user.displayName}</small>
            <Link to={`/${user.username}/article/${slug}`}>
                <h1 className="font-semibold text-2xl hover:text-blue-500">
                    {title}
                </h1>
            </Link>

            {moment(createdAt).format('MMMM YYYY')}
        </div>
    )
}

export default ArticleCard
