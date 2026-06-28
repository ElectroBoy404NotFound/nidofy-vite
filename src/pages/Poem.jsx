import DividerLine from "../components/DividerLine";

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useAnimate, useInView } from "framer-motion"

import AnimatedButton from "../components/AnimatedButton";
import PoemPaper from "../components/PoemPaper";
import PoemPaperSkeleton from "../components/PoemPaperSkeleton";

import { getPoem } from "../data/Api";

function Poem() {
    const { id } = useParams();
    const [ poemData, setPoemData ] = useState({
        "id": -1,
        "title": "",
        "poem": [[]],
        "date": "",
        "signature": "",
        "signatureLength": -1,
        "createdAt": ""
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getPoem(id);
            setPoemData(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <br />
            { 
                poemData.signatureLength === -1 ? (
                    <PoemPaperSkeleton />
                ) : (
                    <PoemPaper poem={ poemData } />
                )
            }
            <DividerLine />
        </>
    );
}

export default Poem;