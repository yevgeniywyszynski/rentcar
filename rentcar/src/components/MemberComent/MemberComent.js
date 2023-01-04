import React from "react";
import styles from '../MemberComent/MemberComent.module.scss';

const MemberComent = ({members}) => {
    return(
        <div className={styles.memberWrapper}>
            <p className={styles.title}>What our clients says</p>
                <div className={styles.comentsContainer}>
                    {members.map((member) => (
                        <div key={member.idMember} className={styles.comentsWrapper}>
                            <div className={styles.description}>
                                <p className={styles.coment}>
                                    {member.memberComent}
                                </p>
                                <p className={styles.memberName}>{member.memberName}</p>
                                <p className={styles.memberRole}>{member.memberRole}</p>
                            </div>
                            <img className={styles.likeIcon} alt="likeIcon" src={member.likeIcon}></img>
                            <img className={styles.memberImg} src={member.memberImg} alt="member"></img>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default MemberComent;