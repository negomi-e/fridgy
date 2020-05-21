import React, { Component } from 'react';
import styles from './index.module.css';
import { FaGithub } from "react-icons/fa";

export default class extends Component {
  render() {
    return <footer className={styles.footer}>
      <div>
        <a className={styles.linkGitFooter} href="https://github.com/negomi-e/fridgy/">
          <FaGithub />
        </a>
      </div>
      <div>
        <small>Fridgy products © 2020</small>
      </div>
    </footer>
  }
}
