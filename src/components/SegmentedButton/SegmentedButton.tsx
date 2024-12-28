// "use client";

// import React, { useState } from 'react';
// import styles from './SegmentedButton.module.css';
// import { useSegmentedControlState } from '@/app/contexts/SegmentedControlContext';

// interface SegmentOption {
//     id: string;
//     label: string;
// }

// interface SegmentedButtonProps {
//     options: SegmentOption[];
//     defaultSelected?: string;
//     onChange?: (selectedId: string) => void;
// }

// export const SegmentedButton: React.FC<SegmentedButtonProps> = ({
//     options,
//     defaultSelected,
//     onChange,
// }) => {

//     const { selectedOption, setSelectedOption } = useSegmentedControlState();

//     const [selectedId, setSelectedId] = useState(defaultSelected || options[0]?.id);

//     const handleSelection = (id: string) => {
//         setSelectedId(id);
//         onChange?.(id);
//     };

//     React.useEffect(() => {
//         console.log('Currently selected option:', selectedOption);
//     }, [selectedOption]);

//     return (
//         <ul className={`${styles.segmentedControlRoot}`} role="tablist">
//             {options.map((option) => (
//                 <li key={option.id} role="presentation" className={styles.segmentedControlList}>
//                     <button
//                         className={`${styles.segmentControlButton} ${
//                             selectedOption === option.id ? styles.selected : ''
//                         }`}
//                         onClick={() => setSelectedOption(option.id)}
//                         type="button"
//                         role="tab"
//                         aria-selected={selectedId === option.id}
//                         id={`tab-${option.id}`}
//                     >
//                         {option.label}
//                     </button>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default SegmentedButton;