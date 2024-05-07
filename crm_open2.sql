-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2024 at 06:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm_open2`
--

-- --------------------------------------------------------

--
-- Table structure for table `abilities`
--

CREATE TABLE `abilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `entity_id` bigint(20) UNSIGNED DEFAULT NULL,
  `entity_type` varchar(255) DEFAULT NULL,
  `only_owned` tinyint(1) NOT NULL DEFAULT 0,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`options`)),
  `scope` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `abilities`
--

INSERT INTO `abilities` (`id`, `name`, `title`, `entity_id`, `entity_type`, `only_owned`, `options`, `scope`, `created_at`, `updated_at`) VALUES
(1, 'view-customer', 'View customer customers', NULL, 'Crater\\Models\\Customer', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(2, 'create-customer', 'Create customer customers', NULL, 'Crater\\Models\\Customer', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(3, 'edit-customer', 'Edit customer customers', NULL, 'Crater\\Models\\Customer', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(4, 'delete-customer', 'Delete customer customers', NULL, 'Crater\\Models\\Customer', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(5, 'view-item', 'View item items', NULL, 'Crater\\Models\\Item', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(6, 'create-item', 'Create item items', NULL, 'Crater\\Models\\Item', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(7, 'edit-item', 'Edit item items', NULL, 'Crater\\Models\\Item', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(8, 'delete-item', 'Delete item items', NULL, 'Crater\\Models\\Item', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(9, 'view-tax-type', 'View tax type tax types', NULL, 'Crater\\Models\\TaxType', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(10, 'create-tax-type', 'Create tax type tax types', NULL, 'Crater\\Models\\TaxType', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(11, 'edit-tax-type', 'Edit tax type tax types', NULL, 'Crater\\Models\\TaxType', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(12, 'delete-tax-type', 'Delete tax type tax types', NULL, 'Crater\\Models\\TaxType', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(13, 'view-estimate', 'View estimate estimates', NULL, 'Crater\\Models\\Estimate', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(14, 'create-estimate', 'Create estimate estimates', NULL, 'Crater\\Models\\Estimate', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(15, 'edit-estimate', 'Edit estimate estimates', NULL, 'Crater\\Models\\Estimate', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(16, 'delete-estimate', 'Delete estimate estimates', NULL, 'Crater\\Models\\Estimate', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(17, 'send-estimate', 'Send estimate estimates', NULL, 'Crater\\Models\\Estimate', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(18, 'view-invoice', 'View invoice invoices', NULL, 'Crater\\Models\\Invoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(19, 'create-invoice', 'Create invoice invoices', NULL, 'Crater\\Models\\Invoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(20, 'edit-invoice', 'Edit invoice invoices', NULL, 'Crater\\Models\\Invoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(21, 'delete-invoice', 'Delete invoice invoices', NULL, 'Crater\\Models\\Invoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(22, 'send-invoice', 'Send invoice invoices', NULL, 'Crater\\Models\\Invoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(23, 'view-recurring-invoice', 'View recurring invoice recurring invoices', NULL, 'Crater\\Models\\RecurringInvoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(24, 'create-recurring-invoice', 'Create recurring invoice recurring invoices', NULL, 'Crater\\Models\\RecurringInvoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(25, 'edit-recurring-invoice', 'Edit recurring invoice recurring invoices', NULL, 'Crater\\Models\\RecurringInvoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(26, 'delete-recurring-invoice', 'Delete recurring invoice recurring invoices', NULL, 'Crater\\Models\\RecurringInvoice', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(27, 'view-payment', 'View payment payments', NULL, 'Crater\\Models\\Payment', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(28, 'create-payment', 'Create payment payments', NULL, 'Crater\\Models\\Payment', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(29, 'edit-payment', 'Edit payment payments', NULL, 'Crater\\Models\\Payment', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(30, 'delete-payment', 'Delete payment payments', NULL, 'Crater\\Models\\Payment', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(31, 'send-payment', 'Send payment payments', NULL, 'Crater\\Models\\Payment', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(32, 'view-expense', 'View expense expenses', NULL, 'Crater\\Models\\Expense', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(33, 'create-expense', 'Create expense expenses', NULL, 'Crater\\Models\\Expense', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(34, 'edit-expense', 'Edit expense expenses', NULL, 'Crater\\Models\\Expense', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(35, 'delete-expense', 'Delete expense expenses', NULL, 'Crater\\Models\\Expense', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(36, 'view-custom-field', 'View custom field custom fields', NULL, 'Crater\\Models\\CustomField', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(37, 'create-custom-field', 'Create custom field custom fields', NULL, 'Crater\\Models\\CustomField', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(38, 'edit-custom-field', 'Edit custom field custom fields', NULL, 'Crater\\Models\\CustomField', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(39, 'delete-custom-field', 'Delete custom field custom fields', NULL, 'Crater\\Models\\CustomField', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(40, 'view-financial-reports', 'View financial reports', NULL, NULL, 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(41, 'view-exchange-rate-provider', 'View exchange rate provider exchange rate providers', NULL, 'Crater\\Models\\ExchangeRateProvider', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(42, 'create-exchange-rate-provider', 'Create exchange rate provider exchange rate providers', NULL, 'Crater\\Models\\ExchangeRateProvider', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(43, 'edit-exchange-rate-provider', 'Edit exchange rate provider exchange rate providers', NULL, 'Crater\\Models\\ExchangeRateProvider', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(44, 'delete-exchange-rate-provider', 'Delete exchange rate provider exchange rate providers', NULL, 'Crater\\Models\\ExchangeRateProvider', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(45, 'dashboard', 'Dashboard', NULL, NULL, 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(46, 'view-all-notes', 'View all notes notes', NULL, 'Crater\\Models\\Note', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(47, 'manage-all-notes', 'Manage all notes notes', NULL, 'Crater\\Models\\Note', 0, NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address_street_1` varchar(255) DEFAULT NULL,
  `address_street_2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country_id` int(10) UNSIGNED DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `name`, `address_street_1`, `address_street_2`, `city`, `state`, `country_id`, `zip`, `phone`, `fax`, `type`, `user_id`, `created_at`, `updated_at`, `company_id`, `customer_id`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 160, NULL, NULL, NULL, NULL, NULL, '2024-05-03 09:52:05', '2024-05-03 09:52:05', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `assigned_roles`
--

CREATE TABLE `assigned_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `entity_id` bigint(20) UNSIGNED NOT NULL,
  `entity_type` varchar(255) NOT NULL,
  `restricted_to_id` bigint(20) UNSIGNED DEFAULT NULL,
  `restricted_to_type` varchar(255) DEFAULT NULL,
  `scope` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `assigned_roles`
--

INSERT INTO `assigned_roles` (`id`, `role_id`, `entity_id`, `entity_type`, `restricted_to_id`, `restricted_to_type`, `scope`) VALUES
(1, 1, 1, 'Crater\\Models\\User', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `unique_hash` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `owner_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `unique_hash`, `created_at`, `updated_at`, `slug`, `owner_id`) VALUES
(1, 'Cowris', NULL, 'EKVBD0mWlxA6xOA1nPLY', '2024-05-02 18:55:46', '2024-05-02 18:55:46', 'page', 1);

-- --------------------------------------------------------

--
-- Table structure for table `company_settings`
--

CREATE TABLE `company_settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `option` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company_settings`
--

INSERT INTO `company_settings` (`id`, `option`, `value`, `company_id`, `created_at`, `updated_at`) VALUES
(1, 'invoice_auto_generate', 'NO', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(2, 'payment_auto_generate', 'YES', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(3, 'estimate_auto_generate', 'YES', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(4, 'save_pdf_to_disk', 'NO', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(5, 'invoice_mail_body', 'You have received a new invoice from <b>{COMPANY_NAME}</b>.</br> Please download using the button below:', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(6, 'estimate_mail_body', 'You have received a new estimate from <b>{COMPANY_NAME}</b>.</br> Please download using the button below:', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(7, 'payment_mail_body', 'Thank you for the payment.</b></br> Please download your payment receipt using the button below:', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(8, 'invoice_company_address_format', '<h3><strong>{COMPANY_NAME}</strong></h3><p>{COMPANY_ADDRESS_STREET_1}</p><p>{COMPANY_ADDRESS_STREET_2}</p><p>{COMPANY_CITY} {COMPANY_STATE}</p><p>{COMPANY_COUNTRY}  {COMPANY_ZIP_CODE}</p><p>{COMPANY_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(9, 'invoice_shipping_address_format', '<h3>{SHIPPING_ADDRESS_NAME}</h3><p>{SHIPPING_ADDRESS_STREET_1}</p><p>{SHIPPING_ADDRESS_STREET_2}</p><p>{SHIPPING_CITY}  {SHIPPING_STATE}</p><p>{SHIPPING_COUNTRY}  {SHIPPING_ZIP_CODE}</p><p>{SHIPPING_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(10, 'invoice_billing_address_format', '<h3>{BILLING_ADDRESS_NAME}</h3><p>{BILLING_ADDRESS_STREET_1}</p><p>{BILLING_ADDRESS_STREET_2}</p><p>{BILLING_CITY}  {BILLING_STATE}</p><p>{BILLING_COUNTRY}  {BILLING_ZIP_CODE}</p><p>{BILLING_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(11, 'estimate_company_address_format', '<h3><strong>{COMPANY_NAME}</strong></h3><p>{COMPANY_ADDRESS_STREET_1}</p><p>{COMPANY_ADDRESS_STREET_2}</p><p>{COMPANY_CITY} {COMPANY_STATE}</p><p>{COMPANY_COUNTRY}  {COMPANY_ZIP_CODE}</p><p>{COMPANY_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(12, 'estimate_shipping_address_format', '<h3>{SHIPPING_ADDRESS_NAME}</h3><p>{SHIPPING_ADDRESS_STREET_1}</p><p>{SHIPPING_ADDRESS_STREET_2}</p><p>{SHIPPING_CITY}  {SHIPPING_STATE}</p><p>{SHIPPING_COUNTRY}  {SHIPPING_ZIP_CODE}</p><p>{SHIPPING_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(13, 'estimate_billing_address_format', '<h3>{BILLING_ADDRESS_NAME}</h3><p>{BILLING_ADDRESS_STREET_1}</p><p>{BILLING_ADDRESS_STREET_2}</p><p>{BILLING_CITY}  {BILLING_STATE}</p><p>{BILLING_COUNTRY}  {BILLING_ZIP_CODE}</p><p>{BILLING_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(14, 'payment_company_address_format', '<h3><strong>{COMPANY_NAME}</strong></h3><p>{COMPANY_ADDRESS_STREET_1}</p><p>{COMPANY_ADDRESS_STREET_2}</p><p>{COMPANY_CITY} {COMPANY_STATE}</p><p>{COMPANY_COUNTRY}  {COMPANY_ZIP_CODE}</p><p>{COMPANY_PHONE}</p>', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(15, 'payment_from_customer_address_format', '<h3>{BILLING_ADDRESS_NAME}</h3><p>{BILLING_ADDRESS_STREET_1}</p><p>{BILLING_ADDRESS_STREET_2}</p><p>{BILLING_CITY} {BILLING_STATE} {BILLING_ZIP_CODE}</p><p>{BILLING_COUNTRY}</p><p>{BILLING_PHONE}</p>', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(16, 'currency', '10', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(17, 'time_zone', 'Asia/Kolkata', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(18, 'language', 'en', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(19, 'fiscal_year', '1-12', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(20, 'carbon_date_format', 'Y/m/d', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(21, 'moment_date_format', 'YYYY/MM/DD', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(22, 'notification_email', 'noreply@crater.in', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(23, 'notify_invoice_viewed', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(24, 'notify_estimate_viewed', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(25, 'tax_per_item', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(26, 'discount_per_item', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(27, 'invoice_email_attachment', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(28, 'estimate_email_attachment', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(29, 'payment_email_attachment', 'NO', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(30, 'retrospective_edits', 'allow', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(31, 'invoice_number_format', '{{SERIES:INV}}{{DELIMITER:-}}{{SEQUENCE:6}}', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(32, 'estimate_number_format', '{{SERIES:EST}}{{DELIMITER:-}}{{SEQUENCE:6}}', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(33, 'payment_number_format', '{{SERIES:PAY}}{{DELIMITER:-}}{{SEQUENCE:6}}', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(34, 'estimate_set_expiry_date_automatically', 'YES', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(35, 'estimate_expiry_date_days', '7', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(36, 'invoice_set_due_date_automatically', 'YES', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(37, 'invoice_due_date_days', '7', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(38, 'bulk_exchange_rate_configured', 'YES', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(39, 'estimate_convert_action', 'no_action', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(40, 'automatically_expire_public_links', 'YES', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47'),
(41, 'link_expiry_days', '7', 1, '2024-05-02 18:55:47', '2024-05-02 18:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phonecode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `code`, `name`, `phonecode`) VALUES
(1, 'AF', 'Afghanistan', 93),
(2, 'AL', 'Albania', 355),
(3, 'DZ', 'Algeria', 213),
(4, 'AS', 'American Samoa', 1684),
(5, 'AD', 'Andorra', 376),
(6, 'AO', 'Angola', 244),
(7, 'AI', 'Anguilla', 1264),
(8, 'AQ', 'Antarctica', 0),
(9, 'AG', 'Antigua And Barbuda', 1268),
(10, 'AR', 'Argentina', 54),
(11, 'AM', 'Armenia', 374),
(12, 'AW', 'Aruba', 297),
(13, 'AU', 'Australia', 61),
(14, 'AT', 'Austria', 43),
(15, 'AZ', 'Azerbaijan', 994),
(16, 'BS', 'Bahamas The', 1242),
(17, 'BH', 'Bahrain', 973),
(18, 'BD', 'Bangladesh', 880),
(19, 'BB', 'Barbados', 1246),
(20, 'BY', 'Belarus', 375),
(21, 'BE', 'Belgium', 32),
(22, 'BZ', 'Belize', 501),
(23, 'BJ', 'Benin', 229),
(24, 'BM', 'Bermuda', 1441),
(25, 'BT', 'Bhutan', 975),
(26, 'BO', 'Bolivia', 591),
(27, 'BA', 'Bosnia and Herzegovina', 387),
(28, 'BW', 'Botswana', 267),
(29, 'BV', 'Bouvet Island', 0),
(30, 'BR', 'Brazil', 55),
(31, 'IO', 'British Indian Ocean Territory', 246),
(32, 'BN', 'Brunei', 673),
(33, 'BG', 'Bulgaria', 359),
(34, 'BF', 'Burkina Faso', 226),
(35, 'BI', 'Burundi', 257),
(36, 'KH', 'Cambodia', 855),
(37, 'CM', 'Cameroon', 237),
(38, 'CA', 'Canada', 1),
(39, 'CV', 'Cape Verde', 238),
(40, 'KY', 'Cayman Islands', 1345),
(41, 'CF', 'Central African Republic', 236),
(42, 'TD', 'Chad', 235),
(43, 'CL', 'Chile', 56),
(44, 'CN', 'China', 86),
(45, 'CX', 'Christmas Island', 61),
(46, 'CC', 'Cocos (Keeling) Islands', 672),
(47, 'CO', 'Colombia', 57),
(48, 'KM', 'Comoros', 269),
(49, 'CG', 'Congo', 242),
(50, 'CD', 'Congo The Democratic Republic Of The', 242),
(51, 'CK', 'Cook Islands', 682),
(52, 'CR', 'Costa Rica', 506),
(53, 'CI', 'Cote D Ivoire (Ivory Coast)', 225),
(54, 'HR', 'Croatia (Hrvatska)', 385),
(55, 'CU', 'Cuba', 53),
(56, 'CY', 'Cyprus', 357),
(57, 'CZ', 'Czech Republic', 420),
(58, 'DK', 'Denmark', 45),
(59, 'DJ', 'Djibouti', 253),
(60, 'DM', 'Dominica', 1767),
(61, 'DO', 'Dominican Republic', 1809),
(62, 'TP', 'East Timor', 670),
(63, 'EC', 'Ecuador', 593),
(64, 'EG', 'Egypt', 20),
(65, 'SV', 'El Salvador', 503),
(66, 'GQ', 'Equatorial Guinea', 240),
(67, 'ER', 'Eritrea', 291),
(68, 'EE', 'Estonia', 372),
(69, 'ET', 'Ethiopia', 251),
(70, 'XA', 'External Territories of Australia', 61),
(71, 'FK', 'Falkland Islands', 500),
(72, 'FO', 'Faroe Islands', 298),
(73, 'FJ', 'Fiji Islands', 679),
(74, 'FI', 'Finland', 358),
(75, 'FR', 'France', 33),
(76, 'GF', 'French Guiana', 594),
(77, 'PF', 'French Polynesia', 689),
(78, 'TF', 'French Southern Territories', 0),
(79, 'GA', 'Gabon', 241),
(80, 'GM', 'Gambia The', 220),
(81, 'GE', 'Georgia', 995),
(82, 'DE', 'Germany', 49),
(83, 'GH', 'Ghana', 233),
(84, 'GI', 'Gibraltar', 350),
(85, 'GR', 'Greece', 30),
(86, 'GL', 'Greenland', 299),
(87, 'GD', 'Grenada', 1473),
(88, 'GP', 'Guadeloupe', 590),
(89, 'GU', 'Guam', 1671),
(90, 'GT', 'Guatemala', 502),
(91, 'XU', 'Guernsey and Alderney', 44),
(92, 'GN', 'Guinea', 224),
(93, 'GW', 'Guinea-Bissau', 245),
(94, 'GY', 'Guyana', 592),
(95, 'HT', 'Haiti', 509),
(96, 'HM', 'Heard and McDonald Islands', 0),
(97, 'HN', 'Honduras', 504),
(98, 'HK', 'Hong Kong S.A.R.', 852),
(99, 'HU', 'Hungary', 36),
(100, 'IS', 'Iceland', 354),
(101, 'IN', 'India', 91),
(102, 'ID', 'Indonesia', 62),
(103, 'IR', 'Iran', 98),
(104, 'IQ', 'Iraq', 964),
(105, 'IE', 'Ireland', 353),
(106, 'IL', 'Israel', 972),
(107, 'IT', 'Italy', 39),
(108, 'JM', 'Jamaica', 1876),
(109, 'JP', 'Japan', 81),
(110, 'XJ', 'Jersey', 44),
(111, 'JO', 'Jordan', 962),
(112, 'KZ', 'Kazakhstan', 7),
(113, 'KE', 'Kenya', 254),
(114, 'KI', 'Kiribati', 686),
(115, 'KP', 'Korea North', 850),
(116, 'KR', 'Korea South', 82),
(117, 'KW', 'Kuwait', 965),
(118, 'KG', 'Kyrgyzstan', 996),
(119, 'LA', 'Laos', 856),
(120, 'LV', 'Latvia', 371),
(121, 'LB', 'Lebanon', 961),
(122, 'LS', 'Lesotho', 266),
(123, 'LR', 'Liberia', 231),
(124, 'LY', 'Libya', 218),
(125, 'LI', 'Liechtenstein', 423),
(126, 'LT', 'Lithuania', 370),
(127, 'LU', 'Luxembourg', 352),
(128, 'MO', 'Macau S.A.R.', 853),
(129, 'MK', 'Macedonia', 389),
(130, 'MG', 'Madagascar', 261),
(131, 'MW', 'Malawi', 265),
(132, 'MY', 'Malaysia', 60),
(133, 'MV', 'Maldives', 960),
(134, 'ML', 'Mali', 223),
(135, 'MT', 'Malta', 356),
(136, 'XM', 'Man (Isle of)', 44),
(137, 'MH', 'Marshall Islands', 692),
(138, 'MQ', 'Martinique', 596),
(139, 'MR', 'Mauritania', 222),
(140, 'MU', 'Mauritius', 230),
(141, 'YT', 'Mayotte', 269),
(142, 'MX', 'Mexico', 52),
(143, 'FM', 'Micronesia', 691),
(144, 'MD', 'Moldova', 373),
(145, 'MC', 'Monaco', 377),
(146, 'MN', 'Mongolia', 976),
(147, 'MS', 'Montserrat', 1664),
(148, 'MA', 'Morocco', 212),
(149, 'MZ', 'Mozambique', 258),
(150, 'MM', 'Myanmar', 95),
(151, 'NA', 'Namibia', 264),
(152, 'NR', 'Nauru', 674),
(153, 'NP', 'Nepal', 977),
(154, 'AN', 'Netherlands Antilles', 599),
(155, 'NL', 'Netherlands', 31),
(156, 'NC', 'New Caledonia', 687),
(157, 'NZ', 'New Zealand', 64),
(158, 'NI', 'Nicaragua', 505),
(159, 'NE', 'Niger', 227),
(160, 'NG', 'Nigeria', 234),
(161, 'NU', 'Niue', 683),
(162, 'NF', 'Norfolk Island', 672),
(163, 'MP', 'Northern Mariana Islands', 1670),
(164, 'NO', 'Norway', 47),
(165, 'OM', 'Oman', 968),
(166, 'PK', 'Pakistan', 92),
(167, 'PW', 'Palau', 680),
(168, 'PS', 'Palestinian Territory Occupied', 970),
(169, 'PA', 'Panama', 507),
(170, 'PG', 'Papua new Guinea', 675),
(171, 'PY', 'Paraguay', 595),
(172, 'PE', 'Peru', 51),
(173, 'PH', 'Philippines', 63),
(174, 'PN', 'Pitcairn Island', 0),
(175, 'PL', 'Poland', 48),
(176, 'PT', 'Portugal', 351),
(177, 'PR', 'Puerto Rico', 1787),
(178, 'QA', 'Qatar', 974),
(179, 'RE', 'Reunion', 262),
(180, 'RO', 'Romania', 40),
(181, 'RU', 'Russia', 70),
(182, 'RW', 'Rwanda', 250),
(183, 'SH', 'Saint Helena', 290),
(184, 'KN', 'Saint Kitts And Nevis', 1869),
(185, 'LC', 'Saint Lucia', 1758),
(186, 'PM', 'Saint Pierre and Miquelon', 508),
(187, 'VC', 'Saint Vincent And The Grenadines', 1784),
(188, 'WS', 'Samoa', 684),
(189, 'SM', 'San Marino', 378),
(190, 'ST', 'Sao Tome and Principe', 239),
(191, 'SA', 'Saudi Arabia', 966),
(192, 'SN', 'Senegal', 221),
(193, 'RS', 'Serbia', 381),
(194, 'SC', 'Seychelles', 248),
(195, 'SL', 'Sierra Leone', 232),
(196, 'SG', 'Singapore', 65),
(197, 'SK', 'Slovakia', 421),
(198, 'SI', 'Slovenia', 386),
(199, 'XG', 'Smaller Territories of the UK', 44),
(200, 'SB', 'Solomon Islands', 677),
(201, 'SO', 'Somalia', 252),
(202, 'ZA', 'South Africa', 27),
(203, 'GS', 'South Georgia', 0),
(204, 'SS', 'South Sudan', 211),
(205, 'ES', 'Spain', 34),
(206, 'LK', 'Sri Lanka', 94),
(207, 'SD', 'Sudan', 249),
(208, 'SR', 'Suriname', 597),
(209, 'SJ', 'Svalbard And Jan Mayen Islands', 47),
(210, 'SZ', 'Swaziland', 268),
(211, 'SE', 'Sweden', 46),
(212, 'CH', 'Switzerland', 41),
(213, 'SY', 'Syria', 963),
(214, 'TW', 'Taiwan', 886),
(215, 'TJ', 'Tajikistan', 992),
(216, 'TZ', 'Tanzania', 255),
(217, 'TH', 'Thailand', 66),
(218, 'TG', 'Togo', 228),
(219, 'TK', 'Tokelau', 690),
(220, 'TO', 'Tonga', 676),
(221, 'TT', 'Trinidad And Tobago', 1868),
(222, 'TN', 'Tunisia', 216),
(223, 'TR', 'Turkey', 90),
(224, 'TM', 'Turkmenistan', 7370),
(225, 'TC', 'Turks And Caicos Islands', 1649),
(226, 'TV', 'Tuvalu', 688),
(227, 'UG', 'Uganda', 256),
(228, 'UA', 'Ukraine', 380),
(229, 'AE', 'United Arab Emirates', 971),
(230, 'GB', 'United Kingdom', 44),
(231, 'US', 'United States', 1),
(232, 'UM', 'United States Minor Outlying Islands', 1),
(233, 'UY', 'Uruguay', 598),
(234, 'UZ', 'Uzbekistan', 998),
(235, 'VU', 'Vanuatu', 678),
(236, 'VA', 'Vatican City State (Holy See)', 39),
(237, 'VE', 'Venezuela', 58),
(238, 'VN', 'Vietnam', 84),
(239, 'VG', 'Virgin Islands (British)', 1284),
(240, 'VI', 'Virgin Islands (US)', 1340),
(241, 'WF', 'Wallis And Futuna Islands', 681),
(242, 'EH', 'Western Sahara', 212),
(243, 'YE', 'Yemen', 967),
(244, 'YU', 'Yugoslavia', 38),
(245, 'ZM', 'Zambia', 260),
(246, 'ZW', 'Zimbabwe', 263);

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `symbol` varchar(255) DEFAULT NULL,
  `precision` int(11) NOT NULL,
  `thousand_separator` varchar(255) NOT NULL,
  `decimal_separator` varchar(255) NOT NULL,
  `swap_currency_symbol` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `code`, `symbol`, `precision`, `thousand_separator`, `decimal_separator`, `swap_currency_symbol`, `created_at`, `updated_at`) VALUES
(1, 'US Dollar', 'USD', '$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(2, 'British Pound', 'GBP', '£', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(3, 'Euro', 'EUR', '€', 2, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(4, 'South African Rand', 'ZAR', 'R', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(5, 'Danish Krone', 'DKK', 'kr', 2, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(6, 'Israeli Shekel', 'ILS', 'NIS ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(7, 'Swedish Krona', 'SEK', 'kr', 2, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(8, 'Kenyan Shilling', 'KES', 'KSh ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(9, 'Kuwaiti Dinar', 'KWD', 'KWD ', 3, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(10, 'Canadian Dollar', 'CAD', 'C$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(11, 'Philippine Peso', 'PHP', 'P ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(12, 'Nepali Rupee', 'NPR', 'रू', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(13, 'Indian Rupee', 'INR', '₹', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(14, 'Australian Dollar', 'AUD', '$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(15, 'Singapore Dollar', 'SGD', 'S$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(16, 'Norske Kroner', 'NOK', 'kr', 2, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(17, 'New Zealand Dollar', 'NZD', '$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(18, 'Vietnamese Dong', 'VND', '₫', 0, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(19, 'Swiss Franc', 'CHF', 'Fr.', 2, '\'', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(20, 'Guatemalan Quetzal', 'GTQ', 'Q', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(21, 'Malaysian Ringgit', 'MYR', 'RM', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(22, 'Brazilian Real', 'BRL', 'R$', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(23, 'Thai Baht', 'THB', '฿', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(24, 'Nigerian Naira', 'NGN', '₦', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(25, 'Argentine Peso', 'ARS', '$', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(26, 'Bangladeshi Taka', 'BDT', 'Tk', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(27, 'United Arab Emirates Dirham', 'AED', 'DH ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(28, 'Hong Kong Dollar', 'HKD', 'HK$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(29, 'Indonesian Rupiah', 'IDR', 'Rp', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(30, 'Mexican Peso', 'MXN', '$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(31, 'Egyptian Pound', 'EGP', 'E£', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(32, 'Colombian Peso', 'COP', '$', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(33, 'Central African Franc', 'XAF', 'CFA ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(34, 'West African Franc', 'XOF', 'CFA ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(35, 'Chinese Renminbi', 'CNY', 'RMB ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(36, 'Rwandan Franc', 'RWF', 'RF ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(37, 'Tanzanian Shilling', 'TZS', 'TSh ', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(38, 'Netherlands Antillean Guilder', 'ANG', 'NAƒ', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(39, 'Trinidad and Tobago Dollar', 'TTD', 'TT$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(40, 'East Caribbean Dollar', 'XCD', 'EC$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(41, 'Ghanaian Cedi', 'GHS', '‎GH₵', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(42, 'Bulgarian Lev', 'BGN', 'Лв.', 2, ' ', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(43, 'Aruban Florin', 'AWG', 'Afl. ', 2, ' ', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(44, 'Turkish Lira', 'TRY', 'TL ', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(45, 'Romanian New Leu', 'RON', 'RON', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(46, 'Croatian Kuna', 'HRK', 'kn', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(47, 'Saudi Riyal', 'SAR', '‎SِAR', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(48, 'Japanese Yen', 'JPY', '¥', 0, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(49, 'Maldivian Rufiyaa', 'MVR', 'Rf', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(50, 'Costa Rican Colón', 'CRC', '₡', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(51, 'Pakistani Rupee', 'PKR', 'Rs ', 0, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(52, 'Polish Zloty', 'PLN', 'zł', 2, ' ', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(53, 'Sri Lankan Rupee', 'LKR', 'LKR', 2, ',', '.', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(54, 'Czech Koruna', 'CZK', 'Kč', 2, ' ', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(55, 'Uruguayan Peso', 'UYU', '$', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(56, 'Namibian Dollar', 'NAD', '$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(57, 'Tunisian Dinar', 'TND', '‎د.ت', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(58, 'Russian Ruble', 'RUB', '₽', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(59, 'Mozambican Metical', 'MZN', 'MT', 2, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(60, 'Omani Rial', 'OMR', 'ر.ع.', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(61, 'Ukrainian Hryvnia', 'UAH', '₴', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(62, 'Macanese Pataca', 'MOP', 'MOP$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(63, 'Taiwan New Dollar', 'TWD', 'NT$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(64, 'Dominican Peso', 'DOP', 'RD$', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(65, 'Chilean Peso', 'CLP', '$', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(66, 'Serbian Dinar', 'RSD', 'RSD', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(67, 'Kyrgyzstani som', 'KGS', 'С̲ ', 2, '.', ',', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(68, 'Iraqi Dinar', 'IQD', 'ع.د', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(69, 'Peruvian Soles', 'PEN', 'S/', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(70, 'Moroccan Dirham', 'MAD', 'DH', 2, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(71, 'Jamaican Dollar', 'JMD', '$', 0, ',', '.', 0, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(72, 'Macedonian Denar', 'MKD', 'ден', 0, '.', ',', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prefix` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `facebook_id` varchar(255) DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `github_id` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `enable_portal` tinyint(1) DEFAULT 0,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `prefix`, `name`, `email`, `phone`, `password`, `remember_token`, `facebook_id`, `google_id`, `github_id`, `contact_name`, `company_name`, `website`, `enable_portal`, `currency_id`, `company_id`, `creator_id`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Said Abdulsalam', 'saidabdulsalam5@gmail.com', '08097478343', NULL, NULL, NULL, NULL, NULL, 'Said', NULL, NULL, 0, 24, 1, 1, '2024-05-03 10:30:56', '2024-05-03 10:30:56');

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields`
--

CREATE TABLE `custom_fields` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `placeholder` varchar(255) DEFAULT NULL,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`options`)),
  `boolean_answer` tinyint(1) DEFAULT NULL,
  `date_answer` date DEFAULT NULL,
  `time_answer` time DEFAULT NULL,
  `string_answer` text DEFAULT NULL,
  `number_answer` bigint(20) UNSIGNED DEFAULT NULL,
  `date_time_answer` datetime DEFAULT NULL,
  `is_required` tinyint(1) NOT NULL DEFAULT 0,
  `order` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `company_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_field_values`
--

CREATE TABLE `custom_field_values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `custom_field_valuable_type` varchar(255) NOT NULL,
  `custom_field_valuable_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `boolean_answer` tinyint(1) DEFAULT NULL,
  `date_answer` date DEFAULT NULL,
  `time_answer` time DEFAULT NULL,
  `string_answer` text DEFAULT NULL,
  `number_answer` bigint(20) UNSIGNED DEFAULT NULL,
  `date_time_answer` datetime DEFAULT NULL,
  `custom_field_id` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `email_logs`
--

CREATE TABLE `email_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` varchar(255) NOT NULL,
  `to` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `mailable_type` varchar(255) NOT NULL,
  `mailable_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `email_logs`
--

INSERT INTO `email_logs` (`id`, `from`, `to`, `subject`, `body`, `mailable_type`, `mailable_id`, `created_at`, `updated_at`, `token`) VALUES
(1, 'admin@crater.in', 'saidabdulsalam5@gmail.com', 'New Invoice', 'You have received a new invoice from <b>Cowris</b>.</br> Please download using the button below:', 'Crater\\Models\\Invoice', '1', '2024-05-03 13:30:52', '2024-05-03 13:30:52', 'zmQ8e9rMwKr95YoEV2gq');

-- --------------------------------------------------------

--
-- Table structure for table `estimates`
--

CREATE TABLE `estimates` (
  `id` int(10) UNSIGNED NOT NULL,
  `sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `customer_sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `estimate_date` date NOT NULL,
  `expiry_date` date DEFAULT NULL,
  `estimate_number` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `reference_number` varchar(255) DEFAULT NULL,
  `tax_per_item` varchar(255) NOT NULL,
  `discount_per_item` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `discount` decimal(15,2) DEFAULT NULL,
  `discount_type` varchar(255) DEFAULT NULL,
  `discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `sub_total` bigint(20) UNSIGNED NOT NULL,
  `total` bigint(20) UNSIGNED NOT NULL,
  `tax` bigint(20) UNSIGNED NOT NULL,
  `unique_hash` varchar(255) DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `template_name` varchar(255) DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `base_sub_total` bigint(20) UNSIGNED DEFAULT NULL,
  `base_total` bigint(20) UNSIGNED DEFAULT NULL,
  `base_tax` bigint(20) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `sales_tax_type` varchar(255) DEFAULT NULL,
  `sales_tax_address_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `estimate_items`
--

CREATE TABLE `estimate_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `discount_type` varchar(255) NOT NULL,
  `quantity` decimal(15,2) NOT NULL,
  `unit_name` varchar(255) DEFAULT NULL,
  `discount` decimal(15,2) DEFAULT NULL,
  `discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `tax` bigint(20) UNSIGNED NOT NULL,
  `total` bigint(20) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED DEFAULT NULL,
  `estimate_id` int(10) UNSIGNED NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `base_price` bigint(20) UNSIGNED DEFAULT NULL,
  `base_tax` bigint(20) UNSIGNED DEFAULT NULL,
  `base_total` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exchange_rate_logs`
--

CREATE TABLE `exchange_rate_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `base_currency_id` int(10) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `exchange_rate_logs`
--

INSERT INTO `exchange_rate_logs` (`id`, `company_id`, `base_currency_id`, `currency_id`, `exchange_rate`, `created_at`, `updated_at`) VALUES
(1, 1, 24, 10, 100.000000, '2024-05-03 13:30:05', '2024-05-03 13:30:05');

-- --------------------------------------------------------

--
-- Table structure for table `exchange_rate_providers`
--

CREATE TABLE `exchange_rate_providers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `driver` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `currencies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`currencies`)),
  `driver_config` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`driver_config`)),
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(10) UNSIGNED NOT NULL,
  `expense_date` date NOT NULL,
  `attachment_receipt` varchar(255) DEFAULT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `notes` text DEFAULT NULL,
  `expense_category_id` int(10) UNSIGNED NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_amount` bigint(20) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `payment_method_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expense_categories`
--

CREATE TABLE `expense_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_disks`
--

CREATE TABLE `file_disks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'REMOTE',
  `driver` varchar(255) NOT NULL,
  `set_as_default` tinyint(1) NOT NULL DEFAULT 0,
  `credentials` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`credentials`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `file_disks`
--

INSERT INTO `file_disks` (`id`, `name`, `type`, `driver`, `set_as_default`, `credentials`, `created_at`, `updated_at`) VALUES
(1, 'local_public', 'SYSTEM', 'local', 0, '\"{\\\"driver\\\":\\\"local\\\",\\\"root\\\":\\\"C:\\\\\\\\xampp\\\\\\\\htdocs\\\\\\\\crater\\\\\\\\storage\\\\\\\\app\\\\\\/public\\\",\\\"url\\\":\\\"http:\\\\\\/\\\\\\/localhost:8002\\\\\\/storage\\\",\\\"visibility\\\":\\\"public\\\"}\"', '2024-05-02 18:55:41', '2024-05-02 18:55:41'),
(2, 'local_private', 'SYSTEM', 'local', 1, '\"{\\\"root\\\":\\\"C:\\\\\\\\xampp\\\\\\\\htdocs\\\\\\\\crater\\\\\\\\storage\\\\\\\\app\\\",\\\"driver\\\":\\\"local\\\"}\"', '2024-05-02 18:55:41', '2024-05-02 18:55:41');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(10) UNSIGNED NOT NULL,
  `sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `customer_sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `invoice_date` date NOT NULL,
  `due_date` date DEFAULT NULL,
  `invoice_number` varchar(255) NOT NULL,
  `reference_number` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `paid_status` varchar(255) NOT NULL,
  `tax_per_item` varchar(255) NOT NULL,
  `discount_per_item` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `discount_type` varchar(255) DEFAULT NULL,
  `discount` decimal(15,2) DEFAULT NULL,
  `discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `sub_total` bigint(20) UNSIGNED NOT NULL,
  `total` bigint(20) UNSIGNED NOT NULL,
  `tax` bigint(20) UNSIGNED NOT NULL,
  `due_amount` bigint(20) UNSIGNED NOT NULL,
  `sent` tinyint(1) NOT NULL DEFAULT 0,
  `viewed` tinyint(1) NOT NULL DEFAULT 0,
  `unique_hash` varchar(255) DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `template_name` varchar(255) DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `recurring_invoice_id` bigint(20) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `base_sub_total` bigint(20) UNSIGNED DEFAULT NULL,
  `base_total` bigint(20) UNSIGNED DEFAULT NULL,
  `base_tax` bigint(20) UNSIGNED DEFAULT NULL,
  `base_due_amount` bigint(20) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `sales_tax_type` varchar(255) DEFAULT NULL,
  `sales_tax_address_type` varchar(255) DEFAULT NULL,
  `overdue` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `sequence_number`, `customer_sequence_number`, `invoice_date`, `due_date`, `invoice_number`, `reference_number`, `status`, `paid_status`, `tax_per_item`, `discount_per_item`, `notes`, `discount_type`, `discount`, `discount_val`, `sub_total`, `total`, `tax`, `due_amount`, `sent`, `viewed`, `unique_hash`, `company_id`, `created_at`, `updated_at`, `creator_id`, `template_name`, `customer_id`, `recurring_invoice_id`, `exchange_rate`, `base_discount_val`, `base_sub_total`, `base_total`, `base_tax`, `base_due_amount`, `currency_id`, `sales_tax_type`, `sales_tax_address_type`, `overdue`) VALUES
(1, 1, 1, '2024-05-03', '2024-05-10', 'INV-000001', NULL, 'DRAFT', 'UNPAID', 'NO', 'NO', NULL, 'fixed', 0.00, 0, 2000000, 2000000, 0, 2000000, 0, 0, 'GLV6N74pbMVb1Dqr8nPv', 1, '2024-05-03 13:30:05', '2024-05-03 13:30:05', 1, 'invoice1', 1, NULL, 100.000000, 0, 200000000, 200000000, 0, 200000000, 24, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_items`
--

CREATE TABLE `invoice_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `discount_type` varchar(255) NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `quantity` decimal(15,2) NOT NULL,
  `unit_name` varchar(255) DEFAULT NULL,
  `discount` decimal(15,2) DEFAULT NULL,
  `discount_val` bigint(20) UNSIGNED NOT NULL,
  `tax` bigint(20) UNSIGNED NOT NULL,
  `total` bigint(20) UNSIGNED NOT NULL,
  `invoice_id` int(10) UNSIGNED DEFAULT NULL,
  `item_id` int(10) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `recurring_invoice_id` bigint(20) UNSIGNED DEFAULT NULL,
  `base_price` bigint(20) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `base_tax` bigint(20) UNSIGNED DEFAULT NULL,
  `base_total` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `invoice_items`
--

INSERT INTO `invoice_items` (`id`, `name`, `description`, `discount_type`, `price`, `quantity`, `unit_name`, `discount`, `discount_val`, `tax`, `total`, `invoice_id`, `item_id`, `company_id`, `created_at`, `updated_at`, `recurring_invoice_id`, `base_price`, `exchange_rate`, `base_discount_val`, `base_tax`, `base_total`) VALUES
(1, '2000CAD', NULL, 'fixed', 2000000, 1.00, NULL, 0.00, 0, 0, 2000000, 1, 2, 1, '2024-05-03 13:30:05', '2024-05-03 13:30:05', NULL, 200000000, 100.000000, 0, 0, 200000000);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `unit_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `tax_per_item` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `description`, `price`, `company_id`, `unit_id`, `created_at`, `updated_at`, `creator_id`, `currency_id`, `tax_per_item`) VALUES
(1, 'CAD-NGN', NULL, 200000, 1, NULL, '2024-05-03 13:28:37', '2024-05-03 13:28:37', 1, 10, 0),
(2, '2000CAD', NULL, 200000, 1, NULL, '2024-05-03 13:29:26', '2024-05-03 13:29:26', 1, 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `collection_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `disk` varchar(255) NOT NULL,
  `size` int(10) UNSIGNED NOT NULL,
  `manipulations` text NOT NULL,
  `custom_properties` text NOT NULL,
  `responsive_images` text NOT NULL,
  `order_column` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `uuid` char(36) DEFAULT NULL,
  `conversions_disk` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `model_type`, `model_id`, `collection_name`, `name`, `file_name`, `mime_type`, `disk`, `size`, `manipulations`, `custom_properties`, `responsive_images`, `order_column`, `created_at`, `updated_at`, `uuid`, `conversions_disk`) VALUES
(1, 'Crater\\Models\\Company', 1, 'logo', 'med5656', 'crater-logo---Copy.png', 'image/png', 'public', 94338, '[]', '[]', '[]', 1, '2024-05-03 09:52:08', '2024-05-03 09:52:08', '46d167ea-ca21-46b4-af8b-05663d20175f', 'public'),
(2, 'Crater\\Models\\User', 1, 'admin_avatar', 'crater-logo - Copy', 'crater-logo---Copy.png', 'image/png', 'public', 94338, '[]', '[]', '[]', 2, '2024-05-03 10:17:56', '2024-05-03 10:17:56', 'ddeac968-8e6d-4238-8f75-51c5b64ba557', 'public');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_071840_create_companies_table', 1),
(2, '2014_10_11_125754_create_currencies_table', 1),
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1),
(5, '2016_05_13_060834_create_settings_table', 1),
(6, '2017_04_11_064308_create_units_table', 1),
(7, '2017_04_11_081227_create_items_table', 1),
(8, '2017_04_12_090759_create_invoices_table', 1),
(9, '2017_04_12_091015_create_invoice_items_table', 1),
(10, '2017_05_05_055609_create_estimates_table', 1),
(11, '2017_05_05_073927_create_notifications_table', 1),
(12, '2017_05_06_173745_create_countries_table', 1),
(13, '2017_10_02_123501_create_estimate_items_table', 1),
(14, '2018_11_02_133825_create_ expense_categories_table', 1),
(15, '2018_11_02_133956_create_expenses_table', 1),
(16, '2019_08_30_072639_create_addresses_table', 1),
(17, '2019_09_02_053155_create_payment_methods_table', 1),
(18, '2019_09_03_135234_create_payments_table', 1),
(19, '2019_09_14_120124_create_media_table', 1),
(20, '2019_09_21_052540_create_tax_types_table', 1),
(21, '2019_09_21_052548_create_taxes_table', 1),
(22, '2019_09_26_145012_create_company_settings_table', 1),
(23, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(24, '2020_02_01_063235_create_custom_fields_table', 1),
(25, '2020_02_01_063509_create_custom_field_values_table', 1),
(26, '2020_05_12_154129_add_user_id_to_expenses_table', 1),
(27, '2020_09_07_103054_create_file_disks_table', 1),
(28, '2020_09_22_153617_add_columns_to_media_table', 1),
(29, '2020_09_26_100951_create_user_settings_table', 1),
(30, '2020_10_01_102913_add_company_to_addresses_table', 1),
(31, '2020_10_17_074745_create_notes_table', 1),
(32, '2020_10_24_091934_change_value_column_to_text_on_company_settings_table', 1),
(33, '2020_11_23_050206_add_creator_in_invoices_table', 1),
(34, '2020_11_23_050252_add_creator_in_estimates_table', 1),
(35, '2020_11_23_050316_add_creator_in_payments_table', 1),
(36, '2020_11_23_050333_add_creator_in_expenses_table', 1),
(37, '2020_11_23_050406_add_creator_in_items_table', 1),
(38, '2020_11_23_065815_add_creator_in_users_table', 1),
(39, '2020_11_23_074154_create_email_logs_table', 1),
(40, '2020_12_02_064933_update_crater_version_320', 1),
(41, '2020_12_02_090527_update_crater_version_400', 1),
(42, '2020_12_08_065715_change_description_and_notes_column_type', 1),
(43, '2020_12_08_133131_update_crater_version_401', 1),
(44, '2020_12_14_044717_add_template_name_to_invoices_table', 1),
(45, '2020_12_14_045310_add_template_name_to_estimates_table', 1),
(46, '2020_12_14_051450_remove_template_id_from_invoices_and_estimates_table', 1),
(47, '2020_12_23_061302_update_crater_version_402', 1),
(48, '2020_12_31_100816_update_crater_version_403', 1),
(49, '2021_01_22_085644_update_crater_version_404', 1),
(50, '2021_03_03_155223_add_unit_name_to_pdf', 1),
(51, '2021_03_23_145012_add_number_length_setting', 1),
(52, '2021_05_05_063533_update_crater_version_410', 1),
(53, '2021_06_19_121939_update_crater_version_420', 1),
(54, '2021_06_28_105334_create_bouncer_tables', 1),
(55, '2021_06_28_111647_create_customers_table', 1),
(56, '2021_06_28_120010_add_customer_id_to_estimates_table', 1),
(57, '2021_06_28_120133_add_customer_id_to_expenses_table', 1),
(58, '2021_06_28_120208_add_customer_id_to_invoices_table', 1),
(59, '2021_06_28_120231_add_customer_id_to_payments_table', 1),
(60, '2021_06_29_052745_add_customer_id_to_addresses_table', 1),
(61, '2021_06_30_062411_update_customer_id_in_all_tables', 1),
(62, '2021_07_01_060700_create_user_company_table', 1),
(63, '2021_07_05_100256_change_relationship_of_company', 1),
(64, '2021_07_06_070204_add_owner_id_to_companies_table', 1),
(65, '2021_07_08_110940_add_company_to_notes_table', 1),
(66, '2021_07_09_063502_create_recurring_invoices_table', 1),
(67, '2021_07_09_063712_add_recurring_invoice_id_to_invoices_table', 1),
(68, '2021_07_09_063755_add_recurring_invoice_id_to_invoice_items_table', 1),
(69, '2021_07_15_054753_make_due_date_optional_in_invoices_table', 1),
(70, '2021_07_15_054929_make_expiry_date_optional_estimates_table', 1),
(71, '2021_07_16_072458_add_base_columns_into_invoices_table', 1),
(72, '2021_07_16_072925_add_base_columns_into_invoice_items_table', 1),
(73, '2021_07_16_073040_add_base_columns_into_estimates_table', 1),
(74, '2021_07_16_073441_add_base_columns_into_estimate_items_table', 1),
(75, '2021_07_16_074810_add_base_column_into_payments_table', 1),
(76, '2021_07_16_075100_add_base_values_into_taxes_table', 1),
(77, '2021_07_16_080253_add_currency_id_into_invoices_table', 1),
(78, '2021_07_16_080508_add_currency_id_into_payments_table', 1),
(79, '2021_07_16_080611_add_currency_id_into_items_table', 1),
(80, '2021_07_16_080702_add_currency_id_into_taxes_table', 1),
(81, '2021_07_16_112429_add_currency_id_into_estimates_table', 1),
(82, '2021_08_05_103535_create_exchange_rate_logs_table', 1),
(83, '2021_08_16_091413_add_tax_per_item_into_items_table', 1),
(84, '2021_08_19_063244_add_base_columns_to_expense_table', 1),
(85, '2021_09_28_081543_create_exchange_rate_providers_table', 1),
(86, '2021_09_28_130822_add_sequence_column', 1),
(87, '2021_10_06_100539_add_recurring_invoice_id_to_taxes_table', 1),
(88, '2021_11_13_051127_add_payment_method_to_expense_table', 1),
(89, '2021_11_13_114808_calculate_base_values_for_existing_data', 1),
(90, '2021_11_23_092111_add_new_company_settings', 1),
(91, '2021_11_23_093811_update_crater_version_500', 1),
(92, '2021_12_01_120956_update_crater_version_501', 1),
(93, '2021_12_02_063005_calculate_base_due_amount', 1),
(94, '2021_12_02_074516_migrate_templates_from_version_4', 1),
(95, '2021_12_02_123007_update_crater_version_502', 1),
(96, '2021_12_03_154423_update_crater_version_503', 1),
(97, '2021_12_04_122255_create_transactions_table', 1),
(98, '2021_12_04_123315_add_transaction_id_to_payments_table', 1),
(99, '2021_12_04_123415_add_type_to_payment_methods_table', 1),
(100, '2021_12_06_131201_update_crater_version_504', 1),
(101, '2021_12_09_054033_calculate_base_values_for_expenses', 1),
(102, '2021_12_09_062434_update_crater_version_505', 1),
(103, '2021_12_09_065718_drop_unique_email_on_customers_table', 1),
(104, '2021_12_10_121739_update_creater_version_506', 1),
(105, '2021_12_13_055813_calculate_base_amount_of_payments_table', 1),
(106, '2021_12_13_093701_add_fields_to_email_logs_table', 1),
(107, '2021_12_15_053223_create_modules_table', 1),
(108, '2021_12_21_102521_change_enable_portal_field_of_customers_table', 1),
(109, '2021_12_31_042453_add_type_to_tax_types_table', 1),
(110, '2022_01_05_101841_add_sales_tax_fields_to_invoices_table', 1),
(111, '2022_01_05_102538_add_sales_tax_fields_to_estimates_table', 1),
(112, '2022_01_05_103607_add_sales_tax_fields_to_recurring_invoices_table', 1),
(113, '2022_01_05_115423_update_crater_version_600', 1),
(114, '2022_01_06_103536_add_slug_to_companies', 1),
(115, '2022_01_12_132859_update_crater_version_601', 1),
(116, '2022_01_13_123829_update_crater_version_602', 1),
(117, '2022_02_15_113648_update_crater_version_603', 1),
(118, '2022_02_17_081723_update_crater_version_604', 1),
(119, '2022_02_23_130108_update_value_column_to_nullable_on_settings_table', 1),
(120, '2022_03_02_120210_add_overdue_to_invoices_table', 1),
(121, '2022_03_03_060121_crater_version_605', 1),
(122, '2022_03_03_063237_change_over_due_status_to_sent', 1),
(123, '2022_03_04_051438_calculate_base_values_for_invoice_items', 1),
(124, '2022_03_06_070829_update_crater_version_606', 1);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `version` varchar(255) NOT NULL,
  `installed` tinyint(1) NOT NULL DEFAULT 0,
  `enabled` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `notes` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) NOT NULL,
  `type` varchar(255) NOT NULL,
  `notifiable_type` varchar(255) NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `customer_sequence_number` mediumint(8) UNSIGNED DEFAULT NULL,
  `payment_number` varchar(255) NOT NULL,
  `payment_date` date NOT NULL,
  `notes` text DEFAULT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `unique_hash` varchar(255) DEFAULT NULL,
  `invoice_id` int(10) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `payment_method_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_amount` bigint(20) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `transaction_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `driver` varchar(255) DEFAULT NULL,
  `type` enum('GENERAL','MODULE') NOT NULL DEFAULT 'GENERAL',
  `settings` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`settings`)),
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `use_test_env` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`, `company_id`, `created_at`, `updated_at`, `driver`, `type`, `settings`, `active`, `use_test_env`) VALUES
(1, 'Cash', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46', NULL, 'GENERAL', NULL, 0, 0),
(2, 'Check', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46', NULL, 'GENERAL', NULL, 0, 0),
(3, 'Credit Card', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46', NULL, 'GENERAL', NULL, 0, 0),
(4, 'Bank Transfer', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46', NULL, 'GENERAL', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ability_id` bigint(20) UNSIGNED NOT NULL,
  `entity_id` bigint(20) UNSIGNED DEFAULT NULL,
  `entity_type` varchar(255) DEFAULT NULL,
  `forbidden` tinyint(1) NOT NULL DEFAULT 0,
  `scope` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `ability_id`, `entity_id`, `entity_type`, `forbidden`, `scope`) VALUES
(1, 1, 1, 'roles', 0, 1),
(2, 2, 1, 'roles', 0, 1),
(3, 3, 1, 'roles', 0, 1),
(4, 4, 1, 'roles', 0, 1),
(5, 5, 1, 'roles', 0, 1),
(6, 6, 1, 'roles', 0, 1),
(7, 7, 1, 'roles', 0, 1),
(8, 8, 1, 'roles', 0, 1),
(9, 9, 1, 'roles', 0, 1),
(10, 10, 1, 'roles', 0, 1),
(11, 11, 1, 'roles', 0, 1),
(12, 12, 1, 'roles', 0, 1),
(13, 13, 1, 'roles', 0, 1),
(14, 14, 1, 'roles', 0, 1),
(15, 15, 1, 'roles', 0, 1),
(16, 16, 1, 'roles', 0, 1),
(17, 17, 1, 'roles', 0, 1),
(18, 18, 1, 'roles', 0, 1),
(19, 19, 1, 'roles', 0, 1),
(20, 20, 1, 'roles', 0, 1),
(21, 21, 1, 'roles', 0, 1),
(22, 22, 1, 'roles', 0, 1),
(23, 23, 1, 'roles', 0, 1),
(24, 24, 1, 'roles', 0, 1),
(25, 25, 1, 'roles', 0, 1),
(26, 26, 1, 'roles', 0, 1),
(27, 27, 1, 'roles', 0, 1),
(28, 28, 1, 'roles', 0, 1),
(29, 29, 1, 'roles', 0, 1),
(30, 30, 1, 'roles', 0, 1),
(31, 31, 1, 'roles', 0, 1),
(32, 32, 1, 'roles', 0, 1),
(33, 33, 1, 'roles', 0, 1),
(34, 34, 1, 'roles', 0, 1),
(35, 35, 1, 'roles', 0, 1),
(36, 36, 1, 'roles', 0, 1),
(37, 37, 1, 'roles', 0, 1),
(38, 38, 1, 'roles', 0, 1),
(39, 39, 1, 'roles', 0, 1),
(40, 40, 1, 'roles', 0, 1),
(41, 41, 1, 'roles', 0, 1),
(42, 42, 1, 'roles', 0, 1),
(43, 43, 1, 'roles', 0, 1),
(44, 44, 1, 'roles', 0, 1),
(45, 45, 1, 'roles', 0, 1),
(46, 46, 1, 'roles', 0, 1),
(47, 47, 1, 'roles', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'Crater\\Models\\User', 1, 'authToken', '658bc0c8c30f283e204307079a525b9bdcd83d98dae7accc83f3b645c4b0922a', '[\"*\"]', NULL, '2024-05-03 08:04:35', '2024-05-03 08:04:35'),
(2, 'Crater\\Models\\User', 1, 'authToken', '7e47af9d672924bd7d81d396504958310249aa1eb4471d3fa66e8b75c66bfa5e', '[\"*\"]', NULL, '2024-05-03 08:07:45', '2024-05-03 08:07:45'),
(3, 'Crater\\Models\\User', 1, 'authToken', '6440a00320df57687d30fb2224783830cc123d89b9003a97353968f290877c50', '[\"*\"]', NULL, '2024-05-03 08:11:36', '2024-05-03 08:11:36'),
(4, 'Crater\\Models\\User', 1, 'authToken', '45139ae650094ed58fa904bcae66cded3d429eaae59311f8f9491aa39ff0cb39', '[\"*\"]', '2024-05-03 08:17:16', '2024-05-03 08:13:40', '2024-05-03 08:17:16'),
(5, 'Crater\\Models\\User', 1, 'authToken', 'b2a96a23011cf882d9171bed182d1d170bdde39638980766484895ed733449b4', '[\"*\"]', NULL, '2024-05-03 08:21:50', '2024-05-03 08:21:50'),
(6, 'Crater\\Models\\User', 1, 'authToken', '5fcc3dfee641e154b8dacc048bf5a9e713a0bb74775727f93c2aceb95856b37e', '[\"*\"]', NULL, '2024-05-03 08:22:16', '2024-05-03 08:22:16'),
(7, 'Crater\\Models\\User', 1, 'authToken', 'b44af689a52e2a328785a7a8247f0a4d5bb339de140a193c581227fb61f2a755', '[\"*\"]', NULL, '2024-05-03 08:27:05', '2024-05-03 08:27:05'),
(8, 'Crater\\Models\\User', 1, 'authToken', 'f254cef4f40d3653aab2899495326256b3e4ac3bb568b07983238911c95ed037', '[\"*\"]', NULL, '2024-05-03 08:28:18', '2024-05-03 08:28:18'),
(9, 'Crater\\Models\\User', 1, 'authToken', 'b79b7b70810d25949ecd55e85c5fb8d70d7fe39eb1fa3000cc0924da604865e7', '[\"*\"]', NULL, '2024-05-03 08:29:13', '2024-05-03 08:29:13'),
(10, 'Crater\\Models\\User', 1, 'authToken', 'fb4d59658a9ea053a2fecd3dbea9d9a82f08be4f8e08a1c93294c94bd53217ac', '[\"*\"]', NULL, '2024-05-03 08:34:09', '2024-05-03 08:34:09'),
(11, 'Crater\\Models\\User', 1, 'authToken', '3eed94c03797d7d46ba627014cc9ebd4c30308761d7ed73aa21ac324fd4f5414', '[\"*\"]', NULL, '2024-05-03 08:35:16', '2024-05-03 08:35:16'),
(12, 'Crater\\Models\\User', 1, 'authToken', '7bf9e241e4a0ae2fe9b8803234bfd2964e5537f23f0b865b13101b941b40b31a', '[\"*\"]', NULL, '2024-05-03 08:35:50', '2024-05-03 08:35:50'),
(13, 'Crater\\Models\\User', 1, 'authToken', 'e7ef0947b00726a984da6024877ce5ceb3f5ff980d487d857e83dfe086f26b3b', '[\"*\"]', NULL, '2024-05-03 08:40:45', '2024-05-03 08:40:45'),
(14, 'Crater\\Models\\User', 1, 'authToken', '4bacd142da3c8a600bffc097dc968cd8a567f551d84654f0a6a0a75ab97d7a5d', '[\"*\"]', NULL, '2024-05-03 08:43:35', '2024-05-03 08:43:35'),
(15, 'Crater\\Models\\User', 1, 'authToken', '7ed55c5194b7e0949f1f9b0f22a3f7bff1d4e443fc92739408440da1500a372e', '[\"*\"]', NULL, '2024-05-03 08:44:45', '2024-05-03 08:44:45'),
(16, 'Crater\\Models\\User', 1, 'authToken', 'ca158da32b137d4561a941e5bfb5fbecf98a9dcf90a581a8f450700c3c05a3c6', '[\"*\"]', '2024-05-03 08:45:32', '2024-05-03 08:45:30', '2024-05-03 08:45:32'),
(17, 'Crater\\Models\\User', 1, 'authToken', 'be00f86d80a08d0fb67d5ddb690adfa04cff29e457e0c8289d66ff27f985d41f', '[\"*\"]', '2024-05-03 08:46:27', '2024-05-03 08:46:25', '2024-05-03 08:46:27'),
(18, 'Crater\\Models\\User', 1, 'authToken', 'd97d9c0534e0724bab6f47206fd53bfee934eeb692f161a21dd2e3f229730524', '[\"*\"]', '2024-05-03 08:46:56', '2024-05-03 08:46:54', '2024-05-03 08:46:56'),
(19, 'Crater\\Models\\User', 1, 'authToken', '1fc7103d83eed7fe769fd465273da389b9017e8eb58b38c925bfd22ad034d9f5', '[\"*\"]', '2024-05-03 08:47:06', '2024-05-03 08:47:04', '2024-05-03 08:47:06'),
(20, 'Crater\\Models\\User', 1, 'authToken', 'f023249bc57d1c246c6c91d5cca3ec0bdd933b4ccd3da751742b903621cc15d7', '[\"*\"]', '2024-05-03 08:47:39', '2024-05-03 08:47:36', '2024-05-03 08:47:39'),
(21, 'Crater\\Models\\User', 1, 'authToken', 'd2f8f4a1e040e66460e618c2f4baedf2ad36a4c6d363c8189799663e1f121d1b', '[\"*\"]', '2024-05-03 08:47:47', '2024-05-03 08:47:46', '2024-05-03 08:47:47'),
(22, 'Crater\\Models\\User', 1, 'authToken', '01946c129fdcf6eb9843fd86d80c7810f0385cba9ecdb6bbd476eaef2f08067d', '[\"*\"]', '2024-05-03 08:47:58', '2024-05-03 08:47:57', '2024-05-03 08:47:58'),
(23, 'Crater\\Models\\User', 1, 'authToken', '3a240873daf1e5857d663974099c63fa5fcbd232633fd9e731e670571b8a4265', '[\"*\"]', '2024-05-03 08:48:24', '2024-05-03 08:48:22', '2024-05-03 08:48:24'),
(24, 'Crater\\Models\\User', 1, 'authToken', '1f56cb0f1735344da6c4b1ace68eb4f4941c811a693200f70d6f44a891df2fb8', '[\"*\"]', '2024-05-03 08:48:35', '2024-05-03 08:48:34', '2024-05-03 08:48:35'),
(25, 'Crater\\Models\\User', 1, 'authToken', 'd94db078dbd491607e889a83169cdd64fe87a175dd29704cfc4ca040a8ede73b', '[\"*\"]', '2024-05-03 08:49:00', '2024-05-03 08:49:00', '2024-05-03 08:49:00'),
(26, 'Crater\\Models\\User', 1, 'authToken', '4fdfe8d13367c1caaedfc792717ec15fb3d0d657de18cd9012b0abbec03a3537', '[\"*\"]', '2024-05-03 08:49:58', '2024-05-03 08:49:24', '2024-05-03 08:49:58'),
(27, 'Crater\\Models\\User', 1, 'authToken', 'bc32d0d74bea4e9ac7d95c953517d22800fff06a040a37bb3ecde599c7c168a1', '[\"*\"]', '2024-05-03 08:51:35', '2024-05-03 08:51:33', '2024-05-03 08:51:35'),
(28, 'Crater\\Models\\User', 1, 'authToken', 'acaf2d6395fbe038bb02411514f15c128faf1a327e1af84dbf0db7c986925785', '[\"*\"]', '2024-05-03 08:51:52', '2024-05-03 08:51:51', '2024-05-03 08:51:52'),
(29, 'Crater\\Models\\User', 1, 'authToken', '4976b5c1cd1609daed7501b32c964459191cddb78987adf1e177889da8703508', '[\"*\"]', '2024-05-03 08:52:49', '2024-05-03 08:52:47', '2024-05-03 08:52:49'),
(30, 'Crater\\Models\\User', 1, 'authToken', 'b31319772297d7b644d063f95fefa217141a1153b2ed2f76307c8d904df33327', '[\"*\"]', '2024-05-03 08:53:20', '2024-05-03 08:52:56', '2024-05-03 08:53:20'),
(31, 'Crater\\Models\\User', 1, 'authToken', '7d48eef4fbc88e298a9c817380f5faad6431fe42765d0d0d4333eae14ee69292', '[\"*\"]', '2024-05-03 13:22:02', '2024-05-03 09:04:08', '2024-05-03 13:22:02'),
(32, 'Crater\\Models\\User', 1, 'authToken', '1cc601a0b3df95da3e2e40b8b2a30c2b69e4b1c81f44d432e2771922e6a3a4a2', '[\"*\"]', '2024-05-03 13:32:09', '2024-05-03 13:22:33', '2024-05-03 13:32:09');

-- --------------------------------------------------------

--
-- Table structure for table `recurring_invoices`
--

CREATE TABLE `recurring_invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `starts_at` datetime NOT NULL,
  `send_automatically` tinyint(1) NOT NULL DEFAULT 0,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `status` enum('COMPLETED','ON_HOLD','ACTIVE') NOT NULL DEFAULT 'ACTIVE',
  `next_invoice_at` datetime DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL,
  `frequency` varchar(255) NOT NULL,
  `limit_by` enum('NONE','COUNT','DATE') NOT NULL DEFAULT 'NONE',
  `limit_count` int(11) DEFAULT NULL,
  `limit_date` date DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `tax_per_item` varchar(255) NOT NULL,
  `discount_per_item` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `discount_type` varchar(255) DEFAULT NULL,
  `discount` decimal(15,2) DEFAULT NULL,
  `discount_val` bigint(20) UNSIGNED DEFAULT NULL,
  `sub_total` bigint(20) UNSIGNED NOT NULL,
  `total` bigint(20) UNSIGNED NOT NULL,
  `tax` bigint(20) UNSIGNED NOT NULL,
  `template_name` varchar(255) DEFAULT NULL,
  `due_amount` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sales_tax_type` varchar(255) DEFAULT NULL,
  `sales_tax_address_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `level` int(10) UNSIGNED DEFAULT NULL,
  `scope` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `title`, `level`, `scope`, `created_at`, `updated_at`) VALUES
(1, 'super admin', 'Super Admin', NULL, 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `option` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `option`, `value`, `created_at`, `updated_at`) VALUES
(1, 'version', '6.0.6', '2024-05-02 18:55:41', '2024-05-02 18:55:46'),
(2, 'profile_complete', 'COMPLETED', '2024-05-02 18:55:47', '2024-05-02 18:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `tax_type_id` int(10) UNSIGNED NOT NULL,
  `invoice_id` int(10) UNSIGNED DEFAULT NULL,
  `estimate_id` int(10) UNSIGNED DEFAULT NULL,
  `invoice_item_id` int(10) UNSIGNED DEFAULT NULL,
  `estimate_item_id` int(10) UNSIGNED DEFAULT NULL,
  `item_id` int(10) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `amount` bigint(20) UNSIGNED NOT NULL,
  `percent` decimal(5,2) NOT NULL,
  `compound_tax` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `exchange_rate` decimal(19,6) DEFAULT NULL,
  `base_amount` bigint(20) UNSIGNED DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `recurring_invoice_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tax_types`
--

CREATE TABLE `tax_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `percent` decimal(5,2) NOT NULL,
  `compound_tax` tinyint(4) NOT NULL DEFAULT 0,
  `collective_tax` tinyint(4) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` enum('GENERAL','MODULE') NOT NULL DEFAULT 'GENERAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `unique_hash` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `transaction_date` datetime NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `invoice_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `company_id`, `created_at`, `updated_at`) VALUES
(1, 'box', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(2, 'cm', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(3, 'dz', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(4, 'ft', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(5, 'g', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(6, 'in', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(7, 'kg', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(8, 'km', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(9, 'lb', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(10, 'mg', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46'),
(11, 'pc', 1, '2024-05-02 18:55:46', '2024-05-02 18:55:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `facebook_id` varchar(255) DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL,
  `github_id` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `enable_portal` tinyint(1) DEFAULT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `role`, `remember_token`, `facebook_id`, `google_id`, `github_id`, `contact_name`, `company_name`, `website`, `enable_portal`, `currency_id`, `created_at`, `updated_at`, `creator_id`) VALUES
(1, 'Jane Doe', 'admin@craterapp.com', NULL, '$2a$12$Y6sMStRIKtAccdVI4E7DWOncAORpV1mN7xCtKKQ0kuZlavFkiIoyC', 'super admin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, '2024-05-02 18:55:46', '2024-05-02 18:55:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_company`
--

CREATE TABLE `user_company` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `company_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_company`
--

INSERT INTO `user_company` (`id`, `user_id`, `company_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_settings`
--

CREATE TABLE `user_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_settings`
--

INSERT INTO `user_settings` (`id`, `key`, `value`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'language', 'en', 1, '2024-05-03 10:17:54', '2024-05-03 10:17:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `abilities_scope_index` (`scope`);

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_country_id_foreign` (`country_id`),
  ADD KEY `addresses_user_id_foreign` (`user_id`),
  ADD KEY `addresses_company_id_foreign` (`company_id`),
  ADD KEY `addresses_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `assigned_roles`
--
ALTER TABLE `assigned_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assigned_roles_entity_index` (`entity_id`,`entity_type`,`scope`),
  ADD KEY `assigned_roles_role_id_index` (`role_id`),
  ADD KEY `assigned_roles_scope_index` (`scope`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companies_owner_id_foreign` (`owner_id`);

--
-- Indexes for table `company_settings`
--
ALTER TABLE `company_settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_settings_company_id_foreign` (`company_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `countries_id_index` (`id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_currency_id_foreign` (`currency_id`),
  ADD KEY `customers_company_id_foreign` (`company_id`),
  ADD KEY `customers_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `custom_fields`
--
ALTER TABLE `custom_fields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `custom_fields_company_id_foreign` (`company_id`);

--
-- Indexes for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `custom_field_values_custom_field_id_foreign` (`custom_field_id`),
  ADD KEY `custom_field_values_company_id_foreign` (`company_id`);

--
-- Indexes for table `email_logs`
--
ALTER TABLE `email_logs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_logs_token_unique` (`token`);

--
-- Indexes for table `estimates`
--
ALTER TABLE `estimates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estimates_company_id_foreign` (`company_id`),
  ADD KEY `estimates_creator_id_foreign` (`creator_id`),
  ADD KEY `estimates_customer_id_foreign` (`customer_id`),
  ADD KEY `estimates_currency_id_foreign` (`currency_id`);

--
-- Indexes for table `estimate_items`
--
ALTER TABLE `estimate_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estimate_items_item_id_foreign` (`item_id`),
  ADD KEY `estimate_items_estimate_id_foreign` (`estimate_id`),
  ADD KEY `estimate_items_company_id_foreign` (`company_id`);

--
-- Indexes for table `exchange_rate_logs`
--
ALTER TABLE `exchange_rate_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exchange_rate_logs_company_id_foreign` (`company_id`),
  ADD KEY `exchange_rate_logs_base_currency_id_foreign` (`base_currency_id`),
  ADD KEY `exchange_rate_logs_currency_id_foreign` (`currency_id`);

--
-- Indexes for table `exchange_rate_providers`
--
ALTER TABLE `exchange_rate_providers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exchange_rate_providers_company_id_foreign` (`company_id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expenses_expense_category_id_foreign` (`expense_category_id`),
  ADD KEY `expenses_company_id_foreign` (`company_id`),
  ADD KEY `expenses_creator_id_foreign` (`creator_id`),
  ADD KEY `expenses_payment_method_id_foreign` (`payment_method_id`);

--
-- Indexes for table `expense_categories`
--
ALTER TABLE `expense_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense_categories_company_id_foreign` (`company_id`);

--
-- Indexes for table `file_disks`
--
ALTER TABLE `file_disks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_company_id_foreign` (`company_id`),
  ADD KEY `invoices_creator_id_foreign` (`creator_id`),
  ADD KEY `invoices_customer_id_foreign` (`customer_id`),
  ADD KEY `invoices_recurring_invoice_id_foreign` (`recurring_invoice_id`),
  ADD KEY `invoices_currency_id_foreign` (`currency_id`);

--
-- Indexes for table `invoice_items`
--
ALTER TABLE `invoice_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_items_invoice_id_foreign` (`invoice_id`),
  ADD KEY `invoice_items_item_id_foreign` (`item_id`),
  ADD KEY `invoice_items_company_id_foreign` (`company_id`),
  ADD KEY `invoice_items_recurring_invoice_id_foreign` (`recurring_invoice_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `items_company_id_foreign` (`company_id`),
  ADD KEY `items_unit_id_foreign` (`unit_id`),
  ADD KEY `items_creator_id_foreign` (`creator_id`),
  ADD KEY `items_currency_id_foreign` (`currency_id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_company_id_foreign` (`company_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_invoice_id_foreign` (`invoice_id`),
  ADD KEY `payments_company_id_foreign` (`company_id`),
  ADD KEY `payments_payment_method_id_foreign` (`payment_method_id`),
  ADD KEY `payments_creator_id_foreign` (`creator_id`),
  ADD KEY `payments_customer_id_foreign` (`customer_id`),
  ADD KEY `payments_currency_id_foreign` (`currency_id`),
  ADD KEY `payments_transaction_id_foreign` (`transaction_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_methods_company_id_foreign` (`company_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permissions_entity_index` (`entity_id`,`entity_type`,`scope`),
  ADD KEY `permissions_ability_id_index` (`ability_id`),
  ADD KEY `permissions_scope_index` (`scope`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `recurring_invoices`
--
ALTER TABLE `recurring_invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recurring_invoices_customer_id_foreign` (`customer_id`),
  ADD KEY `recurring_invoices_company_id_foreign` (`company_id`),
  ADD KEY `recurring_invoices_creator_id_foreign` (`creator_id`),
  ADD KEY `recurring_invoices_currency_id_foreign` (`currency_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`,`scope`),
  ADD KEY `roles_scope_index` (`scope`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `taxes_tax_type_id_foreign` (`tax_type_id`),
  ADD KEY `taxes_invoice_id_foreign` (`invoice_id`),
  ADD KEY `taxes_estimate_id_foreign` (`estimate_id`),
  ADD KEY `taxes_invoice_item_id_foreign` (`invoice_item_id`),
  ADD KEY `taxes_estimate_item_id_foreign` (`estimate_item_id`),
  ADD KEY `taxes_item_id_foreign` (`item_id`),
  ADD KEY `taxes_company_id_foreign` (`company_id`),
  ADD KEY `taxes_currency_id_foreign` (`currency_id`),
  ADD KEY `taxes_recurring_invoice_id_foreign` (`recurring_invoice_id`);

--
-- Indexes for table `tax_types`
--
ALTER TABLE `tax_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tax_types_company_id_foreign` (`company_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_company_id_foreign` (`company_id`),
  ADD KEY `transactions_invoice_id_foreign` (`invoice_id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD KEY `units_company_id_foreign` (`company_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_currency_id_foreign` (`currency_id`),
  ADD KEY `users_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `user_company`
--
ALTER TABLE `user_company`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_company_user_id_foreign` (`user_id`),
  ADD KEY `user_company_company_id_foreign` (`company_id`);

--
-- Indexes for table `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_settings_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abilities`
--
ALTER TABLE `abilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `assigned_roles`
--
ALTER TABLE `assigned_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company_settings`
--
ALTER TABLE `company_settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `custom_fields`
--
ALTER TABLE `custom_fields`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `email_logs`
--
ALTER TABLE `email_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `estimates`
--
ALTER TABLE `estimates`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `estimate_items`
--
ALTER TABLE `estimate_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exchange_rate_logs`
--
ALTER TABLE `exchange_rate_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exchange_rate_providers`
--
ALTER TABLE `exchange_rate_providers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expense_categories`
--
ALTER TABLE `expense_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `file_disks`
--
ALTER TABLE `file_disks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoice_items`
--
ALTER TABLE `invoice_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `recurring_invoices`
--
ALTER TABLE `recurring_invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tax_types`
--
ALTER TABLE `tax_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_company`
--
ALTER TABLE `user_company`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `addresses_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`),
  ADD CONSTRAINT `addresses_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `assigned_roles`
--
ALTER TABLE `assigned_roles`
  ADD CONSTRAINT `assigned_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_owner_id_foreign` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `company_settings`
--
ALTER TABLE `company_settings`
  ADD CONSTRAINT `company_settings_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `customers_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `customers_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`);

--
-- Constraints for table `custom_fields`
--
ALTER TABLE `custom_fields`
  ADD CONSTRAINT `custom_fields_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `custom_field_values`
--
ALTER TABLE `custom_field_values`
  ADD CONSTRAINT `custom_field_values_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `custom_field_values_custom_field_id_foreign` FOREIGN KEY (`custom_field_id`) REFERENCES `custom_fields` (`id`);

--
-- Constraints for table `estimates`
--
ALTER TABLE `estimates`
  ADD CONSTRAINT `estimates_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `estimates_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `estimates_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `estimates_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `estimate_items`
--
ALTER TABLE `estimate_items`
  ADD CONSTRAINT `estimate_items_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `estimate_items_estimate_id_foreign` FOREIGN KEY (`estimate_id`) REFERENCES `estimates` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `estimate_items_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `exchange_rate_logs`
--
ALTER TABLE `exchange_rate_logs`
  ADD CONSTRAINT `exchange_rate_logs_base_currency_id_foreign` FOREIGN KEY (`base_currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `exchange_rate_logs_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `exchange_rate_logs_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`);

--
-- Constraints for table `exchange_rate_providers`
--
ALTER TABLE `exchange_rate_providers`
  ADD CONSTRAINT `exchange_rate_providers_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `expenses`
--
ALTER TABLE `expenses`
  ADD CONSTRAINT `expenses_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `expenses_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `expenses_expense_category_id_foreign` FOREIGN KEY (`expense_category_id`) REFERENCES `expense_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `expenses_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`);

--
-- Constraints for table `expense_categories`
--
ALTER TABLE `expense_categories`
  ADD CONSTRAINT `expense_categories_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoices_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoices_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `invoices_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `invoices_recurring_invoice_id_foreign` FOREIGN KEY (`recurring_invoice_id`) REFERENCES `recurring_invoices` (`id`);

--
-- Constraints for table `invoice_items`
--
ALTER TABLE `invoice_items`
  ADD CONSTRAINT `invoice_items_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoice_items_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoice_items_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoice_items_recurring_invoice_id_foreign` FOREIGN KEY (`recurring_invoice_id`) REFERENCES `recurring_invoices` (`id`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `items_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `items_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `items_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `payments_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `payments_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`);

--
-- Constraints for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD CONSTRAINT `payment_methods_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ability_id_foreign` FOREIGN KEY (`ability_id`) REFERENCES `abilities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `recurring_invoices`
--
ALTER TABLE `recurring_invoices`
  ADD CONSTRAINT `recurring_invoices_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `recurring_invoices_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `recurring_invoices_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `recurring_invoices_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `taxes`
--
ALTER TABLE `taxes`
  ADD CONSTRAINT `taxes_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `taxes_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`),
  ADD CONSTRAINT `taxes_estimate_id_foreign` FOREIGN KEY (`estimate_id`) REFERENCES `estimates` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `taxes_estimate_item_id_foreign` FOREIGN KEY (`estimate_item_id`) REFERENCES `estimate_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `taxes_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `taxes_invoice_item_id_foreign` FOREIGN KEY (`invoice_item_id`) REFERENCES `invoice_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `taxes_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `taxes_recurring_invoice_id_foreign` FOREIGN KEY (`recurring_invoice_id`) REFERENCES `recurring_invoices` (`id`),
  ADD CONSTRAINT `taxes_tax_type_id_foreign` FOREIGN KEY (`tax_type_id`) REFERENCES `tax_types` (`id`);

--
-- Constraints for table `tax_types`
--
ALTER TABLE `tax_types`
  ADD CONSTRAINT `tax_types_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `transactions_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`);

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_company`
--
ALTER TABLE `user_company`
  ADD CONSTRAINT `user_company_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_company_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_settings`
--
ALTER TABLE `user_settings`
  ADD CONSTRAINT `user_settings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
