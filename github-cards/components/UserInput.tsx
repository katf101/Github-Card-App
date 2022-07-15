import styles from "./UserInput.module.scss";
import { profileType } from "../utils";
import { useState, useRef } from "react";
import { useProfileContext } from "../pages";

const UserInput = () => {
  // const [state, setState] = useState(initialState)
  const [profiles, setProfiles] = useProfileContext();
  const myRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState("");

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const el = myRef.current as HTMLInputElement;
          const val = el.value.trim();

          if (profiles.map((p) => p.login).includes(val)) {
            setErr("프로필이 존재하지 않습니다.");
            return;
          }

          fetch(`https://api.github.com/users/${val}`)
            .then((res) => res.json())
            .then((data) => {
              const {
                name,
                login,
                avatar_url,
                blog,
                bio,
                public_gists,
                public_repos,
              } = data;
              if (login) {
                setProfiles([
                  ...profiles,
                  {
                    name,
                    login,
                    avatar_url,
                    blog,
                    bio,
                    public_gists,
                    public_repos,
                  },
                ]);
                setErr("");
              } else {
                setErr("프로필을 찾을 수 없습니다.");
              }
            })
            .catch((err) => {
              setErr(err);
            });
          // alert(`login is ${el.value}`);
        }}
      >
        <input ref={myRef} type="text" />
        <button>Add Card</button>
      </form>
      {err && <p className={styles.err}>{err}</p>}
    </div>
  );
};

export default UserInput;
