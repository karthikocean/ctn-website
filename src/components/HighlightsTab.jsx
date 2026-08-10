import React from 'react';
import { FiClipboard } from 'react-icons/fi';
import EmptyState from './EmptyState';
import styles from '../styles/HighlightsTab.module.css';

const HighlightsTab = ({ highlights }) => (
  <EmptyState
    icon={<FiClipboard />}
    title="No Highlights Available"
    description="Event highlights will be updated soon."
  />
);

export default HighlightsTab;
