
import styles from "./AboutMeContent.module.css";

import { useSegmentedControlState } from "@/app/contexts/SegmentedControlContext";

const AboutMeContent: React.FC = () => {

    const { selectedOption } = useSegmentedControlState();

    return(
        <div>
            {selectedOption === 'option1' && <p>The first option is selected</p>}
            {selectedOption === 'option2' && <p>The second option is selected</p>}
            {selectedOption === 'option3' && <p>The third option is selected</p>}
        </div>
    );
};

export default AboutMeContent;