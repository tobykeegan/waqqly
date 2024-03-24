/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetUpdateFormInputValues = {
    name?: string;
    breed?: string;
    gender?: string;
    info?: string;
    userID?: string;
};
export declare type PetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    breed?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    info?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetUpdateFormOverridesProps = {
    PetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    breed?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    info?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PetUpdateFormProps = React.PropsWithChildren<{
    overrides?: PetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pet?: any;
    onSubmit?: (fields: PetUpdateFormInputValues) => PetUpdateFormInputValues;
    onSuccess?: (fields: PetUpdateFormInputValues) => void;
    onError?: (fields: PetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetUpdateFormInputValues) => PetUpdateFormInputValues;
    onValidate?: PetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PetUpdateForm(props: PetUpdateFormProps): React.ReactElement;
