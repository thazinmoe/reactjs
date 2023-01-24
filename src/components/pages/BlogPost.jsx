import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
    const params = useParams();

    return <div>This is blog post {params.id}</div>
}