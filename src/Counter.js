import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);

    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(dislike + 1);

    const styles = {
        color: "black",
    };

    return (

        <div class="likeDislike">
            <IconButton style={styles} onClick={incrementLike} aria-label="delete">
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>
            <IconButton style={styles} onClick={incrementDisLike} aria-label="delete">
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>

            {/* < clas"button_likeDislike" onClick = { () => setLike (like + 1)}>👍{like}</button> */}
            {/* <button class="button_likeDislike"onClick = { () => setDisLike (dislike + 1)}>👎{dislike}</button> */}
        </div>
    );
}
